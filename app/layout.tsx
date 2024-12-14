// 导入全局css
import "@/app/ui/global.css"

import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 使用自定义字体 */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
