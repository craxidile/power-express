import SafeArea from "../../../../_commons/safe-area";
import ProjectBox from "../../../../_commons/project-box";
import {p} from "../../../../../utils/path-utils";

const SectionProjects = () => {
  return (
    <section className="py-[80px] flex flex-col justify-start items-stretch">
      <SafeArea>
        <div className="gap-y-20 flex flex-col justify-start items-stretch">
          <h2 className="uppercase text-secondary text-center text-2xl font-medium">Our Projects</h2>
          <ul className="gap-x-12 gap-y-20 grid grid-cols-3">
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
        </div>
      </SafeArea>
    </section>
  );
};

export default SectionProjects;
