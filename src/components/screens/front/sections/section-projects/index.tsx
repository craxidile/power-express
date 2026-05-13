import SafeArea from "../../../../_commons/safe-area";
import ProjectBox from "../../../../_commons/project-box";
import {p} from "../../../../../utils/path-utils";
import {Link} from "react-router-dom";

const SectionProjects = () => {
  return (
    <section className="py-10 lg:py-20 flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-6 lg:gap-y-20 flex flex-col justify-start items-stretch">
          <h2 className="uppercase text-secondary text-center text-sm lg:text-2xl font-medium">โครงการของเรา</h2>
          <ul className="gap-x-0 lg:gap-x-12 gap-y-20 grid grid-cols-1 lg:grid-cols-3">
            <li>
              <ProjectBox image={p('mock/front/section-projects/mock-project-01.jpg')} title="โครงการโซลาร์ PPA โรงงานเหล็ก"
                          excerpt="การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์"
                          client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
            </li>
            <li>
              <ProjectBox image={p('mock/front/section-projects/mock-project-02.jpg')}
                          title="นิคมอุตสาหกรรมนครปฐม"
                          excerpt="การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์"
                          client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
            </li>
            <li>
              <ProjectBox image={p('mock/front/section-projects/mock-project-03.jpg')}
                          title="Bangkok Distribution Center"
                          excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                          client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
            </li>
            <li>
              <ProjectBox image={p('mock/front/section-projects/mock-project-04.jpg')}
                          title="Chonburi Manufacturing Plant"
                          excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                          client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
            </li>
            <li>
              <ProjectBox image={p('mock/front/section-projects/mock-project-01.jpg')} title="Steel Plant Solar PPA"
                          excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                          client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
            </li>
            <li>
              <ProjectBox image={p('mock/front/section-projects/mock-project-02.jpg')}
                          title="Nakhon Pathom Industrial Complex"
                          excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                          client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
            </li>
          </ul>
          <div className="flex flex-row justify-center items-center">
          <Link to="/">
            <div className="gap-x-4 py-3 lg:py-4 px-6 flex flex-row justify-center items-center border border-gray-medium">
              <span className="text-base lg:text-xl font-medium">ดูโครงการทั้งหมด (14)</span>
              <img alt="More" src={p('mock/front/section-projects/ic-more.svg')} />
            </div>
          </Link>
          </div>
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionProjects;
