import React, { useState } from "react";
import "./Movies.css";

const categories = [
  {
    title: "Polisiye",
    movies: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ygDddxn-5i72A2CdYn0ATeXxIFreH4isMw&s",
        description: "Sherlock (2010), Arthur Conan Doyle'un klasik karakteri Sherlock Holmes'un modern çağa uyarlanmış unutulmaz bir dizisidir. Zeki ve dâhi detektif Sherlock Holmes ile sadık arkadaşı Dr. John Watson, Londra'da karmaşık suçları çözmek için bir araya gelir.",
      },
      {
        src: "https://i.scdn.co/image/ab67616d0000b273ef390d332ba6235afd30970d",
        description: "Bu aksiyon dolu dizi, işlemediği bir suçtan dolayı idam cezasına çarptırılan tek erkek kardeşi Lincoln'ın hayatını kurtarmak için hapse giren Michael Scofield'ın başından geçenleri anlatır.",
      },
      {
        src: "https:m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Çekimleri, hikâyenin de geçtiği Albuquerque, New Mexico'da yapılan dizi, ellinci yaş gününü kutladıktan sonra üçüncü evre akciğer kanseri olduğunu öğrenen kimya öğretmeni Walter White'ın (Bryan Cranston) uyuşturucu baronuna dönüşme sürecini konu almaktadır.",
      },
      {
        src: "https://play-lh.googleusercontent.com/a1GFDT0GVv4Mw40iWRrgAnOuncpZskZn5bzD0rs-Lnh4AfmUnCG6rfsdRN08P8Pl7xcu",
        description: "Fargo; senaryosu, yapımı ve yönetimi Coen Kardeşler'e ait, 1996 yapımı Amerikan sinema filmi. 98 dk. Orta Batı Amerika'da geçen film, bir araba satıcısının (William H. Macy), 1.000.000 $'lık fidye almak amacıyla karısını kaçırmaları için iki adamı (Steve Buscemi ve Peter Stormare) tutması hakkındadır.",
      },
      {
        src: "https://images.justwatch.com/poster/143204207/s718/mindhunter.jpg",
        description: "1977'de, FBI'daki biriminden mutsuz rehine ara bulucusu Holden Ford, deneyimli ajan Bill Tench ile sürpriz bir ortaklık kurar ve yeni bir katil türünü incelemeye başlar. 56 dk. Holden, ürkütücü bir rahatlıkla kendini ifade eden katil Kemper ile görüşür. Ancak bu araştırma, Büro'da olumsuz geri bildirimler alır."
      },
      
    ],
  },
  {
    title: "Bilim Kurgu",
    movies: [
      {
        src: "https://storage.googleapis.com/pod_public/750/106922.jpg",
        description: "Matrix, insanoğlunun ürettiği makinelerin (yapay zekanın), gelişmesi sonrasında, makineler tarafından meydana getirilen simülasyondur. İnsanlar bu simülasyonda tutsak olduklarını bilmeksizin yaşamlarını sürdürmektedir. Film, istenmeyen distopik bir geleceği tasvir eder.",
      },
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZe2PSiA8VZ2_ELcPtn3Q8QQquW3qrMxdHUg&s",
        description: "Pandora'nın biyosferini keşfetmek için bilim insanları, genetik olarak eşleştirilmiş insanlar tarafından kullanılan avatar adı verilen Na'Vi-insan melezlerini (insan + yerli DNA'sından yetiştirilen) kullanırlar. Felçli eski bir Deniz Piyadesi olan Jake Sully (Sam Worthington), ölen özdeş ikiz kardeşinin yerine geçer.",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg",
        description: "Geleceğe Dönüş'te, bir delikanlının kazara 1985 yılından 1955 yılına gitmesi konu edilir. Lisede okuyan anne ve babası ile tanışan genç, yanlışlıkla annesinin romantik ilgisini çeker. Anne ve babasının âşık olmasını engellediği için hatasını telafi edip 1985 yılına geri dönmek zorundadır.",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dune_%282021_film%29.jpg/250px-Dune_%282021_film%29.jpg",
        description: "0191 yılında Dük Leto Atreides, evrendeki en değerli maddenin tek kaynağı olan Dune olarak da bilinen tehlikeli çöl gezegeni Arrakis'in yönetimini kabul eder. İnsan yaşamı, insanüstü düşünce düzeyleri sağlar ve ışıktan hızlı seyahati pratik hale getirir.",
      },
      {
        src: "https://i.pinimg.com/736x/8e/0d/ab/8e0dab8699be85720ce55845065bf6dc.jpg",
        description: "İnsanlığın felaket boyutunda bir salgın hastalık ve kıtlıkla boğuştuğu distopik bir gelecekte geçen film, insanlık için yeni bir yuva arayışıyla Satürn yakınlarındaki solucan deliğinden geçen bir grup astronotu konu ediyor.",
      },
    
    ],
  },
  {
    title: "Korku",
    movies: [
      {
        src:"https://image.tmdb.org/t/p/w500/uCIMY95aqKEwIEwNuFq42UQkY9f.jpg",
        description: "Laurie, 40 yıl önce bir Cadılar Bayramı gecesi kendisini öldürmeye çalışan maskeli katil Michael Myers ile yüzleşmek istemektedir. Laurie, Myers'la yüzleşebilmek ve intikamını alabilmek için onun hapishaneden kaçmasını beklemektedir ve hayali gerçekleşir.",
      },
      {
        src:  "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18852_p_v10_al.jpg",
        description: "Kaliforniya'nın kurgusal Woodsboro kasabasında geçen Çığlık'ın konusu, annesinin cinayet yıldönümünde Ghostface olarak bilinen kostümlü bir seri katilin hedefi haline gelen lise öğrencisi Sidney Prescott (Campbell) ve arkadaşlarının hikayesini konu alır.",
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/6/68/Black_Swan_poster.jpg",
        description: "Genç bir kadın olan Nina, yetenekli bir balerindir. Eski bir balerin olan ve dans konusundaki hırsını kendisine aşılayan annesi ile New York'ta yaşayan Nina'nın hayatı danstan ibarettir. Bale yönetmeni Thomas Leroy, sahneye koyduğu Kuğu Gölü Balesi'nin baş dansçısını yeni sezonda değiştirmeye karar verir.",
      },
      {
        src:  "https://img03.imgsinemalar.com/images/afis_buyuk/e/evdeki-dusman-1660916395.jpg",
        description: "Evdeki Düşman (özgün adı: Orphan), yönetmenliğini Jaume Collet-Serra'nın yaptığı ve başrollerini Vera Farmiga, Peter Sarsgaard ve Isabelle Fuhrman'nın paylaştığı 2009 yapımı gerilim filmidir. Film, doğmamış çocuğun ölümünden sonra 9 yaşındaki gizemli bir kızı evlat edinen bir çifti konu ediniyor.",
      },
      {
        src:  "https://images.justwatch.com/poster/262891365/s718/son-durak.jpg",
        description: "Son durak, genç bir çocuğun gördüğü ölümle ilgili önseziler ve hayatı boyunca onu takip eden gizemli ölümleri konu alan bir korku filmidir. X-Files'ı yöneten deneyimli yönetmen James Wong tarafından yönetilmiştir. Korku · 2000 · 1 sa. 38 dk.",
      },
    
    ],
  },
  {
    title: "Komedi",
    movies: [
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFlK5bul2WPRpYrLCqe_4nbqUcg_qpsAplg&s",
        description: "Bu popüler sitcom 1990'ların Manhattanı'nda iş hayatının, aşkın ve gündelik yaşamın zorluklarıyla uğraşan 20'li yaşlardaki altı arkadaşın komik maceralarını anlatıyor.",
      },
      {
        src: "https://musicart.xboxlive.com/7/21025100-0000-0000-0000-000000000002/504/image.jpg",
        description: "DUMB AND DUMBER'da, oda arkadaşları Lloyd ( Jim Carrey ) ve Harry ( Jeff Daniels ), düşük profilli işlerini ve solucan dükkanı açma hayallerini bırakıp Lloyd'un Mary ( Lauren Holly ) adındaki bir tanıdığını bulmaya çalışırlar",
      },
      {
        src:"https://resizing.flixster.com/hqcqFfWf1syt2OrGlbW7LDvfj9Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg",
        description: "Forrest Gump, düşük I.Q. sahibi genç bir adamdır. Jenny ile tanıştığında ona aşık olur. Gump aralarında Elvis Presley, Kennedy, Nixon'ın da olduğu tarihsel kişilerle kaza eseri tanışır ve 50'lerden 70'lerin sonuna kadar gelen bir süre zarfında olaylar gelişir.",
      },
      {
        src: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p192248_p_v12_ae.jpg",
        description: "Todd Phillips'in yeni filmi Hangover, bu yıl vizyona giren diğer filmler gibi ismiyle de çok uyumlu: Film, Vegas'ta korkunç bir şekilde ters giden bir bekarlığa veda partisini konu alıyor. Damat açıklanamayan bir şekilde ortadan kayboluyor, kimse hiçbir şey hatırlamıyor ve Mike Tyson kaplanını geri istiyor.",
      },
      {
        src:"https://silverpenproductions.wordpress.com/wp-content/uploads/2014/04/medium_5703469429.jpg",
        description: "19 Eylül 2005 ile 31 Mart 2014 tarihleri arasında yayınlanan dizi, ana karakter Ted Mosby ve arkadaş grubunu New York'un Manhattan semtinde takip eder. Çerçeve hikâye olarak Ted (2030 yılında), kızı Penny ve oğlu Luke'a, Eylül 2005 ile Mayıs 2013 arasında anneleriyle tanışmasına yol açan olayları anlatır.",
      },
    
    ],
  },
  
];
export default function Movies() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePage, setActivePage] = useState("Ana Sayfa");

  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.title === selectedCategory)
    : categories;

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setMenuOpen(false);
    setActivePage("Kategoriler"); 
  };

  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    if (page !== "Kategoriler") {
      setSelectedCategory(null); 
      setMenuOpen(false);
    }
  };

  return (
    <div className="movies-page">
      <header className="header">
        <div className="logo">FILM</div>
        <nav className="nav">
          <a
            href="#"
            className={activePage === "Ana Sayfa" ? "active" : ""}
            onClick={() => handleNavClick("Ana Sayfa")}
          >
            Ana Sayfa
          </a>
          <a
            href="#"
            className={activePage === "Filmler" ? "active" : ""}
            onClick={() => handleNavClick("Filmler")}
          >
            Filmler
          </a>

          <div className="dropdown">
            <a
              href="#"
              className={activePage === "Kategoriler" ? "active" : ""}
              onClick={toggleMenu}
            >
              Kategoriler
            </a>
            {menuOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button onClick={() => handleCategorySelect(null)}>Tümü</button>
                </li>
                {categories.map((cat, i) => (
                  <li key={i}>
                    <button onClick={() => handleCategorySelect(cat.title)}>
                      {cat.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        <div className="search-box">
          <input type="text" placeholder="Film ara..." />
          <button>Ara</button>
        </div>
      </header>

      {filteredCategories.map((category, index) => (
        <section className="category-section" key={index}>
          <h2 className="category-title">{category.title}</h2>
          <div className="movie-row">
            {category.movies.map((movie, i) => (
              <div className="movie-card" key={i}>
                <img src={movie.src} alt={`${category.title} ${i + 1}`} />
                <div className="movie-description">{movie.description}</div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

