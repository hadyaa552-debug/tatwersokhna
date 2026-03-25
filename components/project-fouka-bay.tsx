"use client"

export default function ProjectFoukaBay() {
  const phoneNumber = "+201008900076"
  const projectName = "Fouka Bay"
  const waLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`مرحباً، أنا مهتم بمشروع ${projectName} من تطوير مصر وأريد معرفة المزيد من التفاصيل`)}`

  return (
    <section id="fouka-bay" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">

        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">الساحل الشمالي – رأس الحكمة</span>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">Fouka Bay</h2>
          <p className="text-xl text-muted-foreground">فوكا باي – الكيلو 211 طريق إسكندرية مطروح</p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden shadow-2xl mb-6">
          <img src="https://prod-images.nawy.com/processed/inventory/compounds/84/gallery/Screenshot%202025-12-29%20163239/default.webp" alt="Fouka Bay" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 right-8 text-right text-white">
            <p className="text-3xl font-bold">Fouka Bay</p>
            <p className="text-white/80">رأس الحكمة – الكيلو 211</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-right space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              منتجع فوكا باي يقع في قلب خليج رأس الحكمة على مساحة 194 فدان بشاطئ 800 متر وعمق 1100 متر. تصميمات إيطالية راقية وكريستال لاجون 30 فدان مع تشطيب كامل لجميع الوحدات.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "194", label: "فدان" },
                { value: "800م", label: "شاطئ" },
                { value: "30", label: "فدان لاجون" },
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
              { label: "الموقع", value: "الكيلو 211 – رأس الحكمة – الساحل الشمالي" },
              { label: "الوحدات", value: "شاليهات • توين شاليه • تاون شاليه • فيلات" },
              { label: "المساحات", value: "تبدأ من 80م² حتى 444م²" },
              { label: "التشطيب", value: "تشطيب كامل بعد 4 سنوات من التعاقد" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-primary font-semibold">{item.value}</span>
                <span className="text-muted-foreground text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {["كريستال لاجون 30 فدان", "شاطئ 800 متر", "تشطيب كامل", "تصميمات إيطالية", "4 مراحل", "أمن 24/7", "مطاعم وكافيهات", "ملاعب رياضية"].map((f, i) => (
            <div key={i} className="bg-background p-4 text-center text-sm text-muted-foreground font-medium border border-border">{f}</div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">معرض الصور</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "https://prod-images.nawy.com/processed/inventory/compounds/84/gallery/Screenshot%202025-12-29%20163416/default.webp",
              "https://prod-images.nawy.com/processed/inventory/compounds/84/gallery/Screenshot%202025-12-29%20163318/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/8847/default.webp",
              "https://prod-images.nawy.com/processed/inventory/compounds/84/gallery/Screenshot%202025-12-29%20163301/default.webp",
              "https://prod-images.nawy.com/processed/inventory/compounds/84/gallery/Screenshot%202025-12-29%20163358/default.webp",
              "https://prod-images.nawy.com/processed/compound_image/image/8838/default.webp",
            ].map((src, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <img src={src} alt={`Fouka Bay ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary p-8 lg:p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">احجز وحدتك في Fouka Bay</h3>
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
