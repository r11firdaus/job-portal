import { Carousel } from "@/component/Carousel";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Main from "@/component/home/Main";
import Link from "next/link";

const slides = [
  "https://i.postimg.cc/Z0ktfskN/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg",
  "https://i.postimg.cc/MTTSXjbn/brandon-atchison-e-BJWhlq-WR54-unsplash.jpg",
  "https://i.postimg.cc/8cfgmQYD/campbell-3-ZUs-NJhi-Ik-unsplash.jpg",
  "https://i.postimg.cc/8Ck5BcmS/evgeny-tchebotarev-aiwu-Lj-LPFn-U-unsplash.jpg",
  "https://i.postimg.cc/66F8J9tr/hakon-sataoen-qyfco1nf-Mtg-unsplash.jpg",
  "https://i.postimg.cc/ydbzRYvv/joey-banks-YApi-Wyp0lqo-unsplash.jpg",
  "https://i.postimg.cc/NGKKzyqG/joshua-koblin-eq-W1-MPin-EV4-unsplash.jpg",
  "https://i.postimg.cc/JhK81QJw/marcus-p-o-UBjd22g-F6w-unsplash.jpg",
];

export default async function Home() {
  return (<>
    <Navbar />
    <div className="swiper-container">
      <Carousel data={slides}>
        <div className="p-5 mb-4 bg-light bg-gradient rounded-3">
          <div className="container-fluid py-5 text-center">
            <h1 className="display-5 fw-bold">Carigawe</h1>
            <div className="container-fluid col-md-8">
              <p className="text-center">Cari pekerjaan impian anda walaupun yang bikin web nya masih ngaggur. Gak usah pikirin saya, pokoknya <Link href={'/#'}>DAFTAR</Link> sekarang juga !</p>
            </div>
            <Link className="btn btn-success btn-lg" type="button" href='/search'>Cari Kerja</Link>
          </div>
        </div>
      </Carousel>
    </div>
    <Main />
    <Footer />
  </>)
}
