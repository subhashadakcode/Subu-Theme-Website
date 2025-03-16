import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact | Subu Theme",
  description: "Get in touch with the Subu Theme team",
}

export default function ContactPage() {
  return <ContactPageClient />
}

