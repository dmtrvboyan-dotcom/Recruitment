import Image from "next/image"

export function ProductImage() {
  return (
    <div className="w-full -mt-10">
      <div className="relative w-[150%] left-1/2 -translate-x-1/2 max-w-none">
        <div className="relative aspect-video lg:aspect-16/8 rounded-2xl overflow-hidden">
          <Image
            src="/uploaded/product-smart.webp"
            alt="Smart.R Applicant Tracking System Dashboard"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  )
}
