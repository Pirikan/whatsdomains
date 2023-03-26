window.onload = () => {

}



document.querySelector("#CopyLink-Button").onclick = () => {
    let PathName = document.querySelector("#PathName").value;
const regex = /^\/domains\/(.+)$/;
const matchResult = PathName.match(regex);

if (matchResult !== null) {
  const tld = matchResult[1]; // キャプチャされた文字列
  console.log(tld); // => "TLD"
} else {
    console.log("マッチしませんでした");
}
}
