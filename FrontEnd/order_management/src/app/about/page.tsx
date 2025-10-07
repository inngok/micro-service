import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-foreground">
        <Image
          src="/vietnamese-restaurant-kitchen-chef-cooking-traditi.jpg"
          alt="Restaurant kitchen"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-serif text-5xl font-light tracking-tight text-background md:text-7xl text-balance">
              Câu Chuyện Của Chúng Tôi
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-background/90 md:text-xl text-pretty">
              Nơi hương vị truyền thống gặp gỡ đam mê hiện đại, mang đến trải nghiệm ẩm thực đích thực từ trái tim Việt
              Nam
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-32">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl text-balance">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-accent"></div>
            <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
              Chúng tôi tin rằng mỗi bữa ăn là một câu chuyện được kể qua hương vị, kết nối con người với văn hóa và
              truyền thống. Sứ mệnh của chúng tôi là bảo tồn và chia sẻ tinh hoa ẩm thực Việt Nam, sử dụng nguyên liệu
              tươi ngon nhất và công thức gia truyền được truyền qua nhiều thế hệ.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl">
              Giá Trị Cốt Lõi
            </h2>
            <div className="mx-auto mt-6 h-px w-24 bg-accent"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            <div className="text-center">
              <div className="mb-6 font-serif text-6xl font-light text-accent md:text-7xl">1</div>
              <h3 className="mb-4 font-serif text-2xl font-medium tracking-wide text-foreground">Chất Lượng</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                Chúng tôi chỉ sử dụng nguyên liệu tươi ngon nhất, được chọn lọc kỹ càng từ các nhà cung cấp địa phương
                uy tín để đảm bảo hương vị đích thực trong từng món ăn.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 font-serif text-6xl font-light text-accent md:text-7xl">2</div>
              <h3 className="mb-4 font-serif text-2xl font-medium tracking-wide text-foreground">Truyền Thống</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                Mỗi công thức được truyền qua nhiều thế hệ, giữ gìn bản sắc văn hóa ẩm thực Việt Nam trong từng chi
                tiết, từ cách chế biến đến cách trình bày.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 font-serif text-6xl font-light text-accent md:text-7xl">3</div>
              <h3 className="mb-4 font-serif text-2xl font-medium tracking-wide text-foreground">Đam Mê</h3>
              <p className="leading-relaxed text-muted-foreground text-pretty">
                Niềm đam mê với ẩm thực là động lực thúc đẩy chúng tôi không ngừng sáng tạo và hoàn thiện, mang đến
                những trải nghiệm ẩm thực đáng nhớ cho thực khách.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/vietnamese-family-cooking-together-traditional-kit.jpg" alt="Our story" fill className="object-cover" />
            </div>

            <div>
              <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl text-balance">
                Hành Trình Của Chúng Tôi
              </h2>
              <div className="mt-6 h-px w-24 bg-accent"></div>
              <div className="mt-8 space-y-6 leading-relaxed text-muted-foreground text-pretty">
                <p>
                  Câu chuyện của chúng tôi bắt đầu từ một căn bếp nhỏ ở Hà Nội, nơi bà nội đã dạy chúng tôi những bí
                  quyết nấu nướng truyền thống. Mỗi món ăn không chỉ là sự kết hợp của nguyên liệu, mà còn là tình yêu
                  và sự tận tâm được gửi gắm qua từng thao tác.
                </p>
                <p>
                  Sau nhiều năm học hỏi và trau dồi, chúng tôi quyết định mở nhà hàng để chia sẻ những hương vị đặc biệt
                  này với cộng đồng. Mỗi món ăn trên thực đơn đều mang trong mình một câu chuyện, một kỷ niệm, và tình
                  yêu với ẩm thực Việt Nam.
                </p>
                <p>
                  Hôm nay, chúng tôi tự hào là nơi quy tụ của những người yêu thích ẩm thực chân thực, nơi mọi người có
                  thể tìm thấy hương vị của quê nhà và tạo nên những kỷ niệm mới.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center md:py-32">
          <h2 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl">
            Ghé Thăm Chúng Tôi
          </h2>
          <div className="mx-auto mt-6 h-px w-24 bg-accent"></div>
          <div className="mt-12 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>123 Phố Huế, Quận Hai Bà Trưng</p>
            <p>Hà Nội, Việt Nam</p>
            <p className="mt-6">Điện thoại: +84 24 1234 5678</p>
            <p>Email: info@restaurant.vn</p>
          </div>
          <div className="mt-12 space-y-2 text-sm text-muted-foreground">
            <p className="font-medium">Giờ Mở Cửa</p>
            <p>Thứ Hai - Thứ Sáu: 11:00 - 14:00, 17:00 - 22:00</p>
            <p>Thứ Bảy - Chủ Nhật: 10:00 - 22:00</p>
          </div>
        </div>
      </section>
    </main>
  )
}
