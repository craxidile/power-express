import { PropsWithChildren } from 'react';
import ActivityBox from '../activity-box';
import ActivityBoxDetails from '../activity-box-details';
import { Link } from 'react-router-dom';
import { LocaleKey } from '../../../models/_commons/localized';

export interface ProjectBoxProps {
  locale?: LocaleKey;
  id?: string;
  image: string;
  title: string;
  excerpt: string;
  tag: string;
  type: string;
  publishedAt: Date;
}

const HlActivityBox = (props: PropsWithChildren<ProjectBoxProps>) => {
  const {
    locale = 'th',
    id,
    image,
    title,
    excerpt,
    tag,
    type,
    publishedAt,
  } = props;
  return (
    <Link to={`/${locale}/activity/${id ?? 'test'}`}>
      <div className="flex flex-col justify-start items-stretch">
        <div className="gap-x-10 hidden lg:flex flex-row justify-start items-stretch">
          <div
            className="max-w-[722px] h-[406px] flex-1"
            style={{ background: `url(${image}) no-repeat center/cover` }}
          />
          <div className="pt-2 flex-1 flex flex-col justify-start items-start">
            <ActivityBoxDetails
              title={title}
              excerpt={excerpt}
              tag={tag}
              type={type}
              publishedAt={publishedAt}
            />
          </div>
        </div>
        <div className="lg:hidden flex flex-col justify-start items-stretch">
          <ActivityBox
            image={image}
            title={title}
            excerpt={excerpt}
            tag={tag}
            type={type}
            publishedAt={publishedAt}
          />
        </div>
      </div>
    </Link>
  );
};

export default HlActivityBox;
