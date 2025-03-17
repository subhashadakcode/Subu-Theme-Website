"use server"

import { MongoClient } from "mongodb"

type MonitoringLog = {
  timestamp: Date
  status: "up" | "down"
  responseTime: number
  url: string
  error?: string
}

export async function checkWebsiteStatus(url: string): Promise<MonitoringLog> {
  const startTime = Date.now()
  let status: "up" | "down" = "down"
  let error: string | undefined

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Website-Monitor/1.0",
      },
      cache: "no-store",
    })

    status = response.ok ? "up" : "down"
    if (!response.ok) {
      error = `HTTP status: ${response.status}`
    }
  } catch (err) {
    error = err instanceof Error ? err.message : "Unknown error"
  }

  const responseTime = Date.now() - startTime

  const log: MonitoringLog = {
    timestamp: new Date(),
    status,
    responseTime,
    url,
    error,
  }

  await saveMonitoringLog(log)
  return log
}

async function saveMonitoringLog(log: MonitoringLog) {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined")
    return
  }

  const client = new MongoClient(process.env.MONGODB_URI)

  try {
    await client.connect()
    const database = client.db("website-monitoring")
    const logs = database.collection("logs")
    await logs.insertOne(log)
  } catch (err) {
    console.error("Failed to save monitoring log:", err)
  } finally {
    await client.close()
  }
}

export async function getMonitoringLogs(limit = 100): Promise<MonitoringLog[]> {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is not defined")
    return []
  }

  const client = new MongoClient(process.env.MONGODB_URI)

  try {
    await client.connect()
    const database = client.db("website-monitoring")
    const logs = database.collection("logs")
    return (await logs.find({}).sort({ timestamp: -1 }).limit(limit).toArray()) as MonitoringLog[]
  } catch (err) {
    console.error("Failed to get monitoring logs:", err)
    return []
  } finally {
    await client.close()
  }
}

