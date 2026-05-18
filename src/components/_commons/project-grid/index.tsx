import ProjectBox from "../project-box";
import {p} from "../../../utils/path-utils";
import {PropsWithChildren} from "react";
import {LocaleKey} from "../../../models/_commons/localized";

export interface ProjectGridProps {
  locale?: LocaleKey;
}

const ProjectGrid = (props: PropsWithChildren<ProjectGridProps>) => {
  const { locale = 'th' } = props;

  return (
    <ul className="gap-x-0 lg:gap-x-12 gap-y-20 grid grid-cols-1 lg:grid-cols-3">
      <li>
        <ProjectBox locale={locale} image={p('mock/front/section-projects/mock-project-01.jpg')} title="โครงการโซลาร์ PPA โรงงานเหล็ก"
                    excerpt="การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์"
                    client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
      </li>
      <li>
        <ProjectBox locale={locale} image={p('mock/front/section-projects/mock-project-02.jpg')}
                    title="นิคมอุตสาหกรรมนครปฐม"
                    excerpt="การติดตั้งโซลาร์รูฟท็อปขนาดใหญ่บนอาคารคลังสินค้าอุตสาหกรรม โซลูชันพลังงานแสงอาทิตย์แบบครบวงจรนี้ช่วยลดต้นทุนด้านพลังงานได้อย่างมีนัยสำคัญ และแสดงถึงความเชี่ยวชาญของเราในโครงการระดับพาณิชย์"
                    client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
      </li>
      <li>
        <ProjectBox locale={locale} image={p('mock/front/section-projects/mock-project-03.jpg')}
                    title="Bangkok Distribution Center"
                    excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                    client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
      </li>
      <li>
        <ProjectBox locale={locale} image={p('mock/front/section-projects/mock-project-04.jpg')}
                    title="Chonburi Manufacturing Plant"
                    excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                    client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
      </li>
      <li>
        <ProjectBox locale={locale} image={p('mock/front/section-projects/mock-project-01.jpg')} title="Steel Plant Solar PPA"
                    excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                    client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
      </li>
      <li>
        <ProjectBox locale={locale} image={p('mock/front/section-projects/mock-project-02.jpg')}
                    title="Nakhon Pathom Industrial Complex"
                    excerpt="Large-scale rooftop installation on industrial warehouse complex. This comprehensive solar solution provides significant energy cost reduction and demonstrates our expertise in commercial-scale implementations."
                    client="ABC Co., Ltd" location="Nakhon Pathom, Thailand" capacity={400} completion={2023}/>
      </li>
    </ul>
  );
};

export default ProjectGrid;
