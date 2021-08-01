# Kişisel Kod Bankası

Kişisel Kod Bankası projesi ODTÜ SEM bünyesinde yer alan Bilgi Teknolojileri Sertifika Programı (BTSP) kapsamında geliştirildi. Kişisel Kod Bankası kod, algoritma, bileşen gibi kod bloklarının saklanabildiği bir web uygulamasıdır. Kod blokları oluşturulabilir, düzenlenebilir veya silinebilir. Aynı zamanda etikete göre veya başlığa göre filtreleme yapılabilir. Kullanıcı kayıt ve girişi ile uygulama kişisel çalışma alanı sunmaktadır. Tüm veriler veritabanında tutulmaktadır.

### Geliştirme Süreci

Proje geliştirilirken Çağlayan Süreç Modeli kullanıldı. Geliştirme aşamaları şu şekildedir:

1. Proje gereksinimleri ve kullanılacak teknolojiler belirlendi.
2. Girdiler ve çıktılar belirlenerek sistem mimarisi tasarlandı.
3. UML ile kullanım durumu diyagramları oluşturuldu.
4. Her kullanım durumu için UML ile sıralama diyagramları oluşturuldu.
5. Sıralama diyagramları oluşturulurken sınıf-nesne diyagramları oluşturuldu.
6. ER diyagramı ile veritabanı tasarımı yapıldı.
7. Kullanıcı arayüzü tasarlandı.
8. Yazılım tasarımı, kodlanarak gerçekleştirildi.

Projede kullanılan teknolojilere genel bakış:

- **Frontend Teknolojileri:**
  JavaScript, HTML, CSS, Bootstrap, Webpack, Babel, ESLint, Prettier

- **Backend Teknolojileri:**
  Node.js, Express, MongoDB Atlas, Postman

Kullanıcı girişi için `JWT`, parola kriptolama için `bcryptjs` kullanıldı. Ayrıca veritabanı URI güvenliği için `dotenv` kullanıldı.

### Kurulum Aşamaları

Kişisel Kod Bankası `npm` projesi olarak geliştirildiği için Node.js yüklü olmalıdır. Öncelikle proje klonlanır ya da zip olarak indirilir. Gerekli paketlerin yüklenebilmesi için `npm install` komutu kullanılır.

Frontend kurulumu için `npm run build` komutu kullanılır. Ardından `npm run dev` ile tarayıcı tarafı çalıştırılır. Uygulama `localhost:8080`'de çalışır.

Backend kurulumu için veritabanı bağlantısı gereklidir. Ana dizinde `.env` isminde dosya oluşturulur. Dosya içerisine `DB_URI = (buraya MongoDB URI gelecek)` şeklinde MongoDB Atlas URI tanımlanır. Eğer MongoDB URI yoksa [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) adresine bakılabilir.

Sunucuyu ayağa kaldırmak için `npm start` komutu kullanılır. Sunucu `localhost:3000`'de çalışır.
