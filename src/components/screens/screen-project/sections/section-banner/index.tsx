import { useVmScreenProject } from '../../../../../stores/vm-screen-project';

const SectionBanner = () => {
  const vmScreenProject = useVmScreenProject();
  const { project } = vmScreenProject;
  const { banner } = project ?? {};

  return (
    <section
      className="h-[560px] lg:h-[800px]"
      style={{ background: `url(${banner}) no-repeat center/cover` }}
    />
  );
};

export default SectionBanner;
