# Personal Code Bank

The Personal Code Bank project has been developed within the scope of the Information Technologies Certificate Program within METU-CEC. Personal Code Bank is a web application where code blocks such as code snippets, algorithm components can be stored. Code blocks can be created, edited or deleted. Filtering also can be applied by tag or by title. A special color highlight is applied to the JavaScript language for the code blocks entered. With user registration and login, the application offers a personal workspace. All data is kept in the database.

### Development Process

The Waterfall Model has been used while developing the project. The development stages are as follows:

1. Project requirements and technologies to be used were determined.
2. The system architecture was developed by determining the inputs and outputs.
3. Use case diagrams were created by using UML.
4. Sequence diagrams were created by UML for each use case.
5. Class-object diagrams were created while creating sequence diagrams.
6. Database design was done with ER diagram.
7. Wireframe was designed for the user interface.
8. The software design was carried out by coding.

Overview of technologies used in the project:

- **Frontend Technologies:**
  JavaScript, HTML, CSS, Bootstrap, Webpack, Babel, ESLint, Prettier

- **Backend Technologies:**
  Node.js, Express, MongoDB Atlas, Postman

[CodeMirror](https://codemirror.net/) is used for the colored highlight code feature.
`JWT` and `bcryptjs` were used for user login and password encryption, respectively. Also for database URI security `dotenv` was used.

### Installation Steps

Node.js must be installed as the Personal Code Bank is developed as a `npm` project. First, the project is cloned or downloaded as zip. The `npm install` command is used to install the necessary packages.

The `npm run build` command is used for frontend installation. Then, the client side is start with `npm run dev`. The application runs at `localhost:8080`.

Database connection is required for backend installation. The `.env` file is created in the main directory. MongoDB Atlas URI is defined in the file as `DB_URI = (connect URI will go here)`. If MongoDB URI is not available, [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) address can be looked up.

The `npm start` command is used to start the server. The server runs at `localhost:3000`.

---

# Kişisel Kod Bankası

Kişisel Kod Bankası projesi ODTÜ SEM bünyesinde yer alan Bilgi Teknolojileri Sertifika Programı (BTSP) kapsamında geliştirildi. Kişisel Kod Bankası kod, algoritma, bileşen gibi kod bloklarının saklanabildiği bir web uygulamasıdır. Kod blokları oluşturulabilir, düzenlenebilir veya silinebilir. Aynı zamanda etikete göre veya başlığa göre filtreleme yapılabilir. Girilen kod blokları için JavaScript diline özel renkli vurgu uygulanır. Kullanıcı kayıt ve girişi ile uygulama kişisel çalışma alanı sunar. Tüm veriler veritabanında tutulur.

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

JavaScript diline özel renkli vurgu özelliği için [CodeMirror](https://codemirror.net/) kullanıldı.
Kullanıcı girişi için `JWT`, parola kriptolama için `bcryptjs` kullanıldı. Ayrıca veritabanı URI güvenliği için `dotenv` kullanıldı.

### Kurulum Aşamaları

Kişisel Kod Bankası `npm` projesi olarak geliştirildiği için Node.js yüklü olmalıdır. Öncelikle proje klonlanır ya da zip olarak indirilir. Gerekli paketlerin yüklenebilmesi için `npm install` komutu kullanılır.

Frontend kurulumu için `npm run build` komutu kullanılır. Ardından `npm run dev` ile tarayıcı tarafı çalıştırılır. Uygulama `localhost:8080`'de çalışır.

Backend kurulumu için veritabanı bağlantısı gereklidir. Ana dizinde `.env` isminde dosya oluşturulur. Dosya içerisine `DB_URI = (buraya MongoDB URI gelecek)` şeklinde MongoDB Atlas URI tanımlanır. Eğer MongoDB URI yoksa [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/) adresine bakılabilir.

Sunucuyu ayağa kaldırmak için `npm start` komutu kullanılır. Sunucu `localhost:3000`'de çalışır.
