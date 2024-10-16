function diziTanımla(){
    //diziler 3 farklı yöntemle oluşturulabilir
    var renkler = ["mavi","yeşil","sarı"];//1. yöntem bu şekilde olduğu gibidir
   
    //ikinci yöntemde 3 elemanı var şeklinde yaparak diziyi oluşturuyoruz
    var renkler2=new Array(3);
    renkler2[0]="mavi";     //burada da dizimizin içerisine elemanları tanımlıyoruz
    renkler2[1]="yeşil";

    //üçüncü yöntemde de hem diziyi tanımlıyoruz hem de elemanları atıyoruz
    var renkler3=new Array("mavi","yeşil","sarı");  

    //Son yöntem de bu şekildedir.Problemlere göre hangi dizi yapısı mantıklıysa o şekilde kullanmak daha faydalı ve pratik olacaktır
}

//Dizi oluşturmanın farklı yöntemleri vardır.Aşağıdaki uygulamalarda farklı şekillerde kullanarak bunlara örnek gösterdim.Siz hangisini beğeniyorsanız veya hangisi daha uygun oluyorsa ona göre işlem yapabilirsiniz.

//Dizi elemanlarına değer atama 
function diziAtama(){
    //Array sınıfından hafta isimli değişkene 7 elemanlı bir dizi oluşturduk
    var hafta=new Array(7);   
    hafta[0]="Pazartesi";   //Burada 0 indisli elemana "pazartesi" değerini atadık
    hafta[1]="Salı";
    hafta[2]="Çarşamba";

    //diziyi ekrana yazdıralım
    document.write(hafta + "<br>"); 
    document.write(hafta[2]);
    alert(hafta[0]);
}

//Dizi oluşturup değer atama yapalım
function diziOlustur(){
    //alttaki şekilde elamanlarını bizim girdiğimiz bir dizi oluşturduk
    // var arkadaslar=["Ahmet","Emircan","Emre","Yavuz"];
    
    //aşağıdaki gibi de elemanları bizim girdiğimiz şekilde yapabiliriz
    var arkadaslar=new Array(4);
    // arkadaslar[0]="Ahmet";
    // arkadaslar[1]="Emircan";
    // arkadaslar[2]="Emre";
    // arkadaslar[3]="Yavuz";    
    
    //Aşağıdaki gibi kullanıcıdan da verileri alabiliriz.Bu gibi tekrar işlemleri yapıyorsak bunları for döngüsüyle yapmaya gayret edelim:)
    // arkadaslar[0]=prompt("1. Arkadaşınızı giriniz: ");    
    // arkadaslar[1]=prompt("2. Arkadaşınızı giriniz: ");
    // arkadaslar[2]=prompt("3. Arkadaşınızı giriniz: ");
    // arkadaslar[3]=prompt("4. Arkadaşınızı giriniz: ");

    //Bu şekilde yazarak daha kısa ve anlaşılır kodlar yazabiliriz.
    for(var i=0; i<4; i++){
        //Prompt içerisinde i+1 yazmamın sebebi ekrana 0. değilde 1. şeklinde gelmesini istediğimden bu şekilde bir kod yazdım
        arkadaslar[i]=prompt((i+1) + " Arkadaşınızı giriniz: "); 
    }

    document.write(arkadaslar + "<br>");    //Tek satırda yazdırmak istersek
    for(var i=0; i<=3; i++){                //Alt alta yazdırmak istersek 
        document.write(arkadaslar[i] + "<br>");
    }
}

function kullaniciBesVeriGirsin(){
    //Beş elemanlı bir dizi oluşturduk
    var veriler=new Array(5);
    for(var i=0; i<5; i++){
        veriler[i]=prompt((i+1) + ". rengi giriniz: "); //Kullanıcıdan verileri alıyoruz
    }

    for(var i=0; i<5; i++){
        document.write((i+1) + ". eleman: " + veriler[i] + "<br>");
    }
}

function diziOrtalama(){
    //Değişkenleri tanımlayalım
    var dizitoplami=0, ortalama=0;
    var dizi=new Array(5);

    //Dizi elemanlarını kullanıcıdan alıyorum
    for(var i=0; i<5; i++){
        dizi[i]=Number(prompt((i+1) + ". sayi: "));
    }

    //Dizi toplamı
    for(var i=0; i<5; i++){
        dizitoplami=dizitoplami+dizi[i];
    }

    //Dizi ortalaması
    ortalama=dizitoplami/5;

    //Ekrana yazdırıyoruz
    document.write("Ortalama: " + ortalama);
}

function diziMetot(){
    var sayilar=[1,4,6,9,2];
    document.write("Elemanlar: " + sayilar + "<br>");
    document.write("Eleman sayısı: " + sayilar.length + "<br>");    //Dizinin uzunluğunu verir 
    sayilar.sort();     //Dizi elemanlarını sıralar küçükten büyüğe sıralar
    document.write("Elemanlar: " + sayilar + "<br>");
    sayilar.reverse();  //Dizi elemanlarını büyükten küçüğe sıralar
    document.write("Elemanlar: " + sayilar + "<br>");
    sayilar.push(20);   //Dizi sonuna bir eleman ekler
    document.write("Elemanlar: " + sayilar + "<br>");
    sayilar.unshift(61);//Dizi başına eleman ekler
    document.write("Elemanlar: " + sayilar + "<br>");
    document.write(sayilar.shift() + "<br>");   //Dizinin ilk elemanını alır
    document.write("Elemanlar: " + sayilar + "<br>");
    document.write(sayilar.pop() + "<br>");     //Dizinin son elemanını döndürür ve siler
    document.write("Elemanlar: " + sayilar + "<br>");
}

function diziYazdir(){
    //Dizinin uzunluğunu kontrol edelim
    var uzunluk = Number(prompt("Dizinin kaç elemanlı olmasını istersiniz: "));

    //Diziyi oluşturuyoruz
    var diziOlustur=new Array(uzunluk);

    //Girilen sayıları uzunluğa göre döndürüyoruz
    for(var i = 0; i < uzunluk; i++){
        diziOlustur[i] = prompt((i+1) + ". Sayıyı giriniz: ");
    }

    document.write("Girilen sayılar: " + diziOlustur);
}

function diziOrtalamaBulma(){
    //Kullanıcıya dizinin kaç elemanlı olmasını soralım
    var uzunluk = Number(prompt("Dizinin kaç elemanlı olmasını istersiniz: "));

    //Bir tane boş bir dizi oluşturalım
    var dizi = new Array(uzunluk);

    //Kullanıcıdan istediği eleman sayısına göre sayı girmesini isteyelim
    for(var i = 0; i < uzunluk; i++){
        dizi[i] = Number(prompt((i+1) + ". eleman sayıyısı: "));
    }

    //Dizideki sayıların toplamasını yapıyoruz
    var toplam=0, ortalama=0;
    for(var i = 0; i < uzunluk; i++){
        toplam = toplam + dizi[i];
    }

    //Dizideki sayıların ortalamasını yapıyoruz
    alert(ortalama = toplam / uzunluk);
}

function diziSiralama(){
    //Boş bir dizi tanımlayalım
    var dizi = new Array();

    //Kullanıcıya dizinin kaç elemanlı olmasını soralım
    var n = Number(prompt("Dizinin eleman sayısını belirtiniz: "));

    //Alınan eleman sayısını diziye atayalım
    for(var i = 0; i < n; i++){
        dizi[i] = Number(prompt((i+1) + ". eleman sayısı: "));
    }

    //Kullanıcın girdiği sıralama
    document.write("Kullanıcın girdiği sıralama: " + dizi + "<br>");
    
    //Diziyi küçükten büyüğe doğru sıralar
    document.write("Küçükten büyüğe doğru sıralama: ");
    dizi.sort();
    for(var i = 0; i < n; i++){
        document.write(dizi[i] + "-");
    }

    document.write("<br>");
    
    //Diziyi büyükten küçüğe doğru sıralar
    document.write("Büyükten küçüğe doğru sıralama: ");
    dizi.reverse();
    for(var i = 0; i < n; i++){
        document.write(dizi[i] + "-");
    }
}

function stringDizi(){
    //Dizimizi tanımlayalım
    var kelime = new Array();

    //Kullanıcıdan kelime girmesini isteyelim ve bunu büyük harfe çevirelim
    kelime = prompt("Bir kelime giriniz:");
    kelime=kelime.toUpperCase();

    document.write(kelime + "<br>");

    //Girilen kelimenin uzunluğunu bulalım
    var uzunluk = kelime.length;

    //Dizi elemanlarını alt alta tek tek yazdıralım
    for(var i=0; i<uzunluk; i++)
        document.write(kelime[i] + "<br>");

    //Dizi elemanlarını tersten yazalım
    for(var i=uzunluk-1; i>=0; i--)
        document.write(kelime[i] + "<br>");
}