import banner from '../assets/img/banner.jpg';

export default function About() {
  return (
    <section id="about">
    <div className="container-fluid pt-16 px-16 bg-charcoal">
      <div className="container py-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 text-left">
            <h1 className="text-6xl text-golden font-moondance mb-6 ">Timeless Elegance</h1>
            <p className="text-5xl text-golden font-moondance font-normal mb-8 ">in Our Store</p>
            <p className="mb-6 text-gray-200 text-lg font-playfair leading-relaxed max-w-lg">
            Experience timeless elegance with our curated collection of luxury watches, where exceptional craftsmanship, classic design, and unmatched service combine for an unforgettable experience.
            </p>
            
          </div>
          <div className="w-full lg:w-1/2">
            <img src={banner} className="w-full rounded-xl shadow-luxury hover:shadow-2xl transition-shadow duration-300 max-w-lg mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
} 