import { useVmScreenProject } from '../../../../../stores/vm-screen-project';
import Loading from '../../../../_commons/loading';

const SectionBanner = () => {
  const vmScreenProject = useVmScreenProject();
  const { loading, project } = vmScreenProject;
  const { banner } = project ?? {};

  return (
    <section
      className="h-[400px] lg:h-[800px] flex flex-col justify-center items-center"
      style={{ background: `url(${banner}) no-repeat center/cover` }}
    >
      {loading && <Loading />}
    </section>
  );
};

export default SectionBanner;
