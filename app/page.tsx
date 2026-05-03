import { Phone, MapPin, Wifi, Car, Wind, Tv, Refrigerator, Waves, Star, Clock, ChevronDown } from "lucide-react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-primary">მწვანე ტერასა</div>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="text-dark hover:text-primary transition-colors">მთავარი</a>
            <a href="#services" className="text-dark hover:text-primary transition-colors">სერვისები</a>
            <a href="#rooms" className="text-dark hover:text-primary transition-colors">ოთახები</a>
            <a href="#contact" className="text-dark hover:text-primary transition-colors">კონტაქტი</a>
          </div>
          <a href="tel:+995571729191" className="btn-primary flex items-center gap-2">
            <Phone size={18} />
            დაჯავშნა
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              სასტუმრო მწვანე ტერასა
            </h1>
            <p className="text-xl mb-8 text-white/90">
              თქვენი სახლი აჭარაში — კომფორტული ოთახები, გემრიელი საუზმე და სტუმართმოყვარეობა
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+995571729191" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                <Phone size={20} />
                დარეკეთ
              </a>
              <a href="https://wa.me/995571729191" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center gap-2">
                WhatsApp
              </a>
            </div>
            <div className="flex gap-6 mt-8">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400" fill="currentColor" />
                <span>5.0 რეიტინგი</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-white/80" />
                <span>24/7 მომსახურება</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
              alt="სასტუმრო მწვანე ტერასა"
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-primary py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-white/80">კომფორტული ოთახი</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-white/80">საწოლი</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500მ</div>
              <div className="text-white/80">ზღვამდე</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₾50+</div>
              <div className="text-white/80">ღამის ფასი</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">სერვისები</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            ჩვენ გთავაზობთ ყველაფერს, რაც საჭიროა კომფორტული დასვენებისთვის
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Wifi, title: "უფასო Wi-Fi", desc: "სწრაფი ინტერნეტი ყველა ოთახში" },
              { icon: Car, title: "უფასო პარკინგი", desc: "უსაფრთხო ავტოსადგომი" },
              { icon: Wind, title: "კონდიციონერი", desc: "კლიმატის კონტროლი" },
              { icon: Tv, title: "ტელევიზორი", desc: "სატელიტი არხები" },
              { icon: Refrigerator, title: "მაცივარი", desc: "მინი-ბარი ოთახში" },
              { icon: Waves, title: "ახლოს ზღვასთან", desc: "500 მეტრი ზღვამდე" },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-dark">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms */}
      <section id="rooms" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">ოთახები</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            აირჩიეთ თქვენზე მორგებული ოთახი
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "სტანდარტი", price: "₾50", features: ["1 ორსაწოლიანი საწოლი", "Wi-Fi", "ტელევიზორი", "კონდიციონერი"] },
              { name: "ნახევარი ლუქსი", price: "₾80", features: ["1 ორსაწოლიანი საწოლი", "აივანი", "Wi-Fi", "მინი-ბარი", "კონდიციონერი"] },
              { name: "ოჯახური", price: "₾120", features: ["2 საწოლი", "აივანი", "Wi-Fi", "მინი-ბარი", "კონდიციონერი"] },
              { name: "ლუქსი", price: "₾150", features: ["2 ოთახი", "პანორამული ხედი", "Wi-Fi", "მინი-ბარი", "კონდიციონერი"] },
            ].map((room, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${idx % 2 === 0 ? '1611892440504-42a792e24d32' : '1631049307264-da0ec9d70304'}?w=600&q=80`}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-dark">{room.name}</h3>
                    <span className="text-2xl font-bold text-secondary">{room.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+995571729191" className="btn-primary w-full block text-center">
                    დაჯავშნა
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">მდებარეობა</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            მწვანე ტერასა მდებარეობს აჭარაში, ზღვასთან ახლოს
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-dark">მისამართი</h4>
                  <p className="text-gray-600">აჭარა, საქართველო</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-dark">ტელეფონი</h4>
                  <p className="text-gray-600">(+995) 571 72 91 91</p>
                </div>
              </div>
              <div className="bg-primary/10 p-6 rounded-xl">
                <h4 className="font-semibold text-dark mb-2">ახლოს:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• ზღვა — 500 მ</li>
                  <li>• ბათუმი — 30 კმ</li>
                  <li>• მაღაზიები — 200 მ</li>
                  <li>• რესტორნები — 300 მ</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="მდებარეობა"
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">სტუმრების შეფასებები</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            რას ამბობენ ჩვენი სტუმრები
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "ნინო კ.", text: "ძალიან მომეწონა! სუფთა, კომფორტული და მეპატრონეები ძალიან სტუმართმოყვარეები არიან.", rating: 5 },
              { name: "გიორგი მ.", text: "შესანიშნავი ადგილი დასასვენებლად. ზღვასთან ახლოს და გემრიელი საუზმე.", rating: 5 },
              { name: "მარიამ თ.", text: "მეორედ ვაპირებ მოსვლას. ყველაფერი იდეალურად იყო. გირჩევთ!", rating: 5 },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-semibold text-dark">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            დაჯავშნეთ ოთახი ახლავე!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            მიიღეთ საუკეთესო ფასი დაჯავშნისას
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+995571729191" className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone size={20} />
              დარეკეთ: 571 72 91 91
            </a>
            <a href="https://wa.me/995571729191" className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors animate-pulse">
              WhatsApp-ზე მიწერა
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">კონტაქტი</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            დაგვიკავშირდით ნებისმიერი კითხვით
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-dark mb-2">ტელეფონი</h4>
              <p className="text-gray-600">(+995) 571 72 91 91</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-dark mb-2">მისამართი</h4>
              <p className="text-gray-600">აჭარა, საქართველო</p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center shadow-sm">
              <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-dark mb-2">მუშაობის საათები</h4>
              <p className="text-gray-600">24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">მწვანე ტერასა</h3>
              <p className="text-white/80">
                საოჯახო სასტუმრო აჭარაში. კომფორტული ოთახები და სტუმართმოყვარეობა.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">სწრაფი ბმულები</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#home" className="hover:text-white transition-colors">მთავარი</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">სერვისები</a></li>
                <li><a href="#rooms" className="hover:text-white transition-colors">ოთახები</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">კონტაქტი</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">კონტაქტი</h4>
              <ul className="space-y-2 text-white/80">
                <li>(+995) 571 72 91 91</li>
                <li>აჭარა, საქართველო</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© {currentYear} სასტუმრო მწვანე ტერასა | შექმნილია SiTech-ის მიერ</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
