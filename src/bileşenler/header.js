const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("header");

    const span1 = document.createElement("span");
    span1.classList.add("date");
    span1.textContent = `${tarih}`;
    containerDiv.append(span1);

    const h1 = document.createElement("h1");
    h1.textContent = `${baslik}`;
    containerDiv.append(h1);

    const span2 = document.createElement("span");
    span2.classList.add("temp");
    span2.textContent=`${yazi}`;
    containerDiv.append(span2);

    return containerDiv;

}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  document.querySelector(secici).append(Header("Teknoloji Zamanı","08.06.2023","Hoşgeldiniz"));
 


}

export { Header, headerEkleyici }
