import { getMonitoringLogs } from "@/lib/monitoring"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Website Monitoring | Subu Theme",
  description: "Monitor your website status and performance",
}

export default async function MonitoringPage() {
  const logs = await getMonitoringLogs(50)

  // Calculate uptime percentage
  const totalChecks = logs.length
  const successfulChecks = logs.filter((log) => log.status === "up").length
  const uptimePercentage = totalChecks > 0 ? ((successfulChecks / totalChecks) * 100).toFixed(2) : "100.00"

  // Calculate average response time
  const totalResponseTime = logs.reduce((sum, log) => sum + log.responseTime, 0)
  const averageResponseTime = totalChecks > 0 ? (totalResponseTime / totalChecks).toFixed(2) : "0"

  return (
    <div className="container mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Website Monitoring Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Uptime</CardTitle>
            <CardDescription>Last 50 checks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{uptimePercentage}%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Average Response Time</CardTitle>
            <CardDescription>Last 50 checks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{averageResponseTime} ms</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Current Status</CardTitle>
            <CardDescription>Latest check result</CardDescription>
          </CardHeader>
          <CardContent>
            {logs.length > 0 ? (
              <Badge className={logs[0].status === "up" ? "bg-green-500" : "bg-red-500"}>
                {logs[0].status === "up" ? "Online" : "Offline"}
              </Badge>
            ) : (
              <Badge variant="outline">No data</Badge>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Monitoring Logs</CardTitle>
          <CardDescription>Last 50 website status checks</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Response Time</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Error</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log, index) => (
                <TableRow key={index}>
                  <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={log.status === "up" ? "bg-green-500" : "bg-red-500"}>
                      {log.status === "up" ? "Online" : "Offline"}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.responseTime} ms</TableCell>
                  <TableCell className="max-w-[200px] truncate">{log.url}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{log.error || "-"}</TableCell>
                </TableRow>
              ))}
              {logs.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No monitoring data available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

