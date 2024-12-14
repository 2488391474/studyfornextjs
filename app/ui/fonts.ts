// 全局配置font字体文件，放置产生 “累积布局移位” 即浏览器最初会使用最初字体，在加载完之后进行自定义字体替换，这种情况会导致大小或者间距发生变化
import {Lusitana,Inter} from "next/font/google"

export const inter = Inter({subsets:['latin']})

export const lusitana = Lusitana({
    weight: ['400', '700'], //指定字体宽度
  subsets: ['latin'],  //次要字体 子字体
})