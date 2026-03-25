"use client"

export default function ProjectDBay() {
  const phoneNumber = "+201119770408"
  const projectName = "D Bay"
  const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${projectName} من تطوير مصر وأريد معرفة المزيد من التفاصيل`)}`

  return (
    <section id="d-bay" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">الساحل الشمالي – الكيلو 165</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">D Bay</h2>
          <p className="text-xl text-muted-foreground">دي باي – على بعد 5 دقائق من لافيستا الساحل الشمالي</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-6">
          <img src="https://prod-images.nawy.com/processed/inventory/compounds/452/gallery/Screenshot%202025-12-29%20161058/default.webp" alt="D Bay" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">D Bay</p>
            <p className="text-white/80">الكيلو 165 – الساحل الشمالي</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              دي باي ثاني مشاريع تطوير مصر بالساحل الشمالي على مساحة 200 فدان بشاطئ 750 متر. تصميم مصاطب متدرجة لضمان إطلالة بحرية مباشرة لجميع الوحدات. استثمارات 7 مليار جنيه.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "200", label: "فدان" },
                { value: "750م", label: "شاطئ" },
                { value: "6", label: "مراحل" },
              ].map((s, i) => (
                <div key={i} className="bg-muted/30 p-5">
                  <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {[
              { label: "الموقع", value: "الكيلو 165 – طريق الإسكندرية الصحراوي" },
              { label: "الوحدات", value: "فيلات مستقلة • شاليهات • توين • تاون" },
              { label: "مميز", value: "مصاطب متدرجة – كل الوحدات تطل على البحر" },
              { label: "الاستثمار", value: "7 مليار جنيه حجم الاستثمارات" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["شاطئ 750 متر", "مصاطب متدرجة", "كريستال لاجون", "إطلالة بحر لكل وحدة", "فيلات فاخرة", "أمن 24/7", "منطقة تجارية", "ملاعب رياضية"].map((f, i) => (
            <div key={i} className="bg-muted/30 p-4 text-center text-sm text-muted-foreground font-medium">{f}</div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">معرض الصور</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "https://prod-images.nawy.com/processed/inventory/compounds/452/gallery/Screenshot%202025-12-29%20161119/default.webp",
              "https://prod-images.nawy.com/processed/inventory/compounds/452/gallery/Screenshot%202025-12-29%20160954/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/3207/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/6799/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/6807/default.webp",
              "https://prod-images.nawy.com/processed/inventory/compounds/452/gallery/Screenshot%202025-12-29%20161613/default.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <img src={src} alt={`D Bay ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في D Bay</h3>
          <p className="text-white/80 mb-6">تواصل معنا للحصول على العروض الحصرية والأسعار</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={waLink} target="_blank" rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-3 font-bold hover:bg-gray-100 transition-colors">واتساب</a>
            <a href={`tel:${phoneNumber}`}
              className="border-2 border-white text-white px-8 py-3 font-bold hover:bg-white hover:text-primary transition-colors">اتصل الآن</a>
          </div>
        </div>
      </div>
    </section>
  )
}
