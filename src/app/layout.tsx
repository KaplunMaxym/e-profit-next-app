import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ProvidersSession} from "@/utilities/ProvidersSession";
import React from "react";
import {StoreProvider} from "@/store/StoreProvider";
require('dotenv').config();
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
            <ProvidersSession>
                <main>{children}</main>
            </ProvidersSession>
        </StoreProvider>
      </body>
    </html>
  )
}
