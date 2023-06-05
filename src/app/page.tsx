import { Carousel } from "@/component/Carousel";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import Main from "@/component/home/Main";
import Link from "next/link";

export default async function Home() {
  return (<>
    <Navbar />
    <div className="swiper-container">
      <Carousel>
        <div className="p-5 mb-4 bg-light rounded-3">
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
