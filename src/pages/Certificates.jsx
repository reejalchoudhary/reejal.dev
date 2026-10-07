import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Certificates() {
const certificates = [

    {
    title: "Technostrophe '26",
    organization: "IIT, Dharwad  | UNSTOP",
    year: "2026",
    image: "https://i.postimg.cc/qBGGzY2b/7ea863f9-ecc9-4ede-8924-6ab29e552132.png",
    url: "https://i.postimg.cc/gjMR4CDz/5b11aa80-80d7-4c0e-8736-a6b73834d26b.png",
  },

  {
    title: "CaseVerse 2.0 - Case Study Competition",
    organization: "NIT, Rourkela | UNSTOP",
    year: "2026",
    image: "https://i.postimg.cc/qBGGzY2b/7ea863f9-ecc9-4ede-8924-6ab29e552132.png",
    url: "https://unstop.com/certificate-preview/7ea863f9-ecc9-4ede-8924-6ab29e552132",
  },
    {
    title: "Spectra - Case Study",
    organization: "Indian Institute of Management Bangalore | UNSTOP",
    year: "2026",
    image: "https://i.postimg.cc/fb68f9LZ/ac5de315-c403-4643-a555-c38edcca4e7d.png",
    url: "https://unstop.com/certificate-preview/ac5de315-c403-4643-a555-c38edcca4e7d",
  },
    {
    title: "Ideathon 2026",
    organization: "NIT, DURGAPUR | UNSTOP",
    year: "2026",
    image: "https://i.postimg.cc/zvYP8gZn/nit.jpg",
    url: "https://unstop.com/certificate-preview/71b80d10-cfcd-4388-af1b-f1e11b1fd461",
  },

  {
    title: "The Math-O-Logic Challenge!",
    organization: "University of Allahabad, Uttar Pradesh | UNSTOP",
    year: "2026",
    image: "https://i.postimg.cc/c1B1CmW0/mathologic.png",
    url: "https://unstop.com/certificate-preview/b90ebc47-a282-4727-854c-e72930df1850",
  },
  {
    title: "CyberGeek CTF 2026",
    organization: "IIIT Allahabad",
    year: "2026",
    image: "https://i.postimg.cc/pX3KGqnz/ctf.png",
    url: "https://i.postimg.cc/pX3KGqnz/ctf.png",
  },
  {
    title: "AI/ML Quiz Mania",
    organization: "HackuVerse | UNSTOP",
    year: "2026",
    image: "https://i.postimg.cc/sgcDQ2yz/aiml.png",
    url: "https://unstop.com/certificate-preview/5f3d1a40-fa0b-4044-b4a5-9172dfd62964",
  },
  {
    title: "Google Cloud Study Jams",
    organization: "GDGoC Chandigarh University",
    year: "2026",
    image: "https://i.postimg.cc/R0KdQ2sn/cloudstudyjams.png",
    url: "https://i.postimg.cc/R0KdQ2sn/cloudstudyjams.png",
  },
  {
    title: "CodeStorm | Enyugma'26",
    organization: "IIIT, Bhagalpur | UNSTOP",
    year: "2026",
    image: "https://i.postimg.cc/RFv71hn4/codestorm.png",
    url: "https://unstop.com/certificate-preview/96b804a3-e4f4-4de8-9f4e-11c5d790ca56",
  },
  {
    title: "GenAI Academy 2.0",
    organization: "Google Cloud | Hack2skill",
    year: "2026",
    image: "https://i.postimg.cc/tJ3s4Q5j/genai.png",
    url: "https://certificate.hack2skill.com/legacy/2025H2S10GENAI-SE300772",
  },
  {
    title: "AI for Bharat",
    organization: "AWS | Hack2skill",
    year: "2026",
    image: "https://i.postimg.cc/Pf3G084B/aiforbharat.png",
    url: "https://certificate.hack2skill.com/legacy/2025H2S11AB-W400015",
  },
  {
    title: "Trailer Making Competition",
    organization: "FICCI | NETFLIX",
    year: "2025",
    image: "https://i.postimg.cc/6QWqYvzY/FCCI.png",
    url: "https://www.verix.io/credential/83021363-e8f8-4e50-b981-9db7d5fc734a",
  },
  {
    title: "Google Cybersecurity Specialization",
    organization: "Google | Coursera",
    year: "2024",
    image: "https://i.postimg.cc/26jWbtP8/CYBER.png",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/LHRV5TM26VGB",
  },
  {
    title: "Digital Forensics Essentials (DFE)",
    organization: "EC-Council",
    year: "2024",
    image: "https://i.postimg.cc/sX2BDhhC/dfe.jpg",
    url: "https://i.postimg.cc/sX2BDhhC/dfe.jpg",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    organization: "Postman",
    year: "2024",
    image: "https://i.postimg.cc/7LhD5MmV/api.png",
    url: "https://i.postimg.cc/TTqPHtbZ/api.png",
  },
  {
    title: "Google UX Design Specialization",
    organization: "Google | Coursera",
    year: "2024",
    image: "https://i.postimg.cc/DfjDxJd1/uiux.jpg",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/VVEFH8DB3J7K",
  },
  {
    title: "ANDROID DEVELOPER CAMP",
    organization: "GDSC PVGCOET | GDG",
    year: "2024",
    image: "https://i.postimg.cc/QNT5yvcP/gdcpo.png",
    url: "https://i.postimg.cc/QNT5yvcP/gdcpo.png",
  },
  {
    title: "Cyber Security Awareness Programme",
    organization: "NIELIT Lucknow",
    year: "2024",
    image: "https://i.postimg.cc/zvXsVTwN/NIELITL.jpg",
    url: "https://regn.nielitvte.edu.in//user/student_uploaded_docs/Certificates/CSAP/Signed_Cert_NIELIT_LKO_CSAP_2024_000002174_REEJAL%20CHOUDHARY_dee6e9ee9fa9539c5517a489ef863e9b.pdf",
  },
  {
    title: "Geo-data sharing and Cyber Security",
    organization: "IIRS Dehradun | ISRO",
    year: "2023",
    image: "https://i.postimg.cc/cJPC749z/iirs.jpg",
    url: "https://i.postimg.cc/cJPC749z/iirs.jpg",
  },
  {
    title: "Republic Day Hackathon-India@75",
    organization: "Reskilll",
    year: "2023",
    image: "https://i.postimg.cc/gkgTx9Qm/ar.png",
    url: "https://reskilll.com/certificate/plutosone/republicdaycert/8ca8f5dbee",
  },
  {
    title: "Cloud Security Engineer Professional",
    organization: "Google Cloud | Coursera",
    year: "2022",
    image: "https://i.postimg.cc/5N2Pd7yJ/cloudsec.jpg",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/7XAM3MCSDXWN",
  },
  {
    title: "FOSSASIA Summit Cloud Skills Challenge",
    organization: "Microsoft | FOSSASIA",
    year: "2022",
    image: "https://i.postimg.cc/d1mF7qzH/microsoft.jpg",
    url: "https://i.postimg.cc/d1mF7qzH/microsoft.jpg",
  },
  {
    title: "Microsoft EcoMatcher Tree",
    organization: "EcoMatcher | Microsoft",
    year: "2022",
    image: "https://i.postimg.cc/KzYfTfWr/tree.jpg",
    url: "https://i.postimg.cc/KzYfTfWr/tree.jpg",
  },
  {
    title: "Flutter Festivals 2022",
    organization: "GDSC AVANTIKA UNIVERSITY | GDG",
    year: "2022",
    image: "https://i.postimg.cc/HL64T5LQ/flutter.jpg",
    url: "https://certificate.givemycertificate.com/c/8579f7d6-3238-4600-a654-120937af06e9",
  },
];

  return (
    <div className="min-h-screen py-10 sm:py-14 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 sm:mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-4">

            <Award className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Certificates
              </span>
            </h1>

          </div>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
            Professional certifications and achievements that validate my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">

          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative"
            >
              <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-70 transition duration-300" />
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827]/95 via-[#1e1b4b]/95 to-[#0f172a]/95 backdrop-blur-lg hover:border-cyan-400/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/10 pointer-events-none" />
                <div className="relative overflow-hidden h-24 sm:h-40 md:h-48">

                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-cyan-500/10" />
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">

                    <Award className="w-3 h-3 sm:w-5 sm:h-5 text-cyan-300" />

                  </div>
                </div>

                <div className="p-2.5 sm:p-5 flex flex-col justify-between h-[145px] sm:h-[210px]">

                  <div className="space-y-2 sm:space-y-3">

                    <h3 className="text-[13px] sm:text-xl font-bold leading-tight text-white group-hover:text-cyan-300 transition-colors line-clamp-2">

                      {cert.title}

                    </h3>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">

                      <span className="text-[10px] sm:text-sm text-gray-400 leading-snug line-clamp-2">
                        {cert.organization}
                      </span>

                      <span className="w-fit px-2 py-0.5 text-[9px] sm:text-xs rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">

                        {cert.year}

                      </span>
                    </div>
                  </div>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 sm:mt-5 flex items-center justify-center gap-1.5 sm:gap-2 w-full py-2.5 sm:py-3 rounded-2xl text-[11px] sm:text-sm font-semibold border border-cyan-400/20 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 text-white hover:scale-[1.03] hover:from-cyan-500 hover:via-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg shadow-violet-500/20"
                  >
                    <ExternalLink size={14} />
                    View
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 grid grid-cols-3 gap-3 sm:gap-6"
        >

          {[
            { label: "Certificates", value: "20+" },
            { label: "Hours", value: "500+" },
            { label: "Platforms", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 blur opacity-30 group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#111827]/95 to-[#1e1b4b]/95 p-3 sm:p-6 text-center backdrop-blur-xl">

                <Award className="w-5 h-5 sm:w-8 sm:h-8 text-cyan-300 mx-auto mb-2 sm:mb-3" />

                <p className="text-xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </p>

                <p className="text-[10px] sm:text-sm text-gray-400 mt-1">
                  {stat.label}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}