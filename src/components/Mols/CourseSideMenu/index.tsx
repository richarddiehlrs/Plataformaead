import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import { CourseSeasonMovie, Course } from 'models/CourseModels';

import VideoCard from 'components/Atoms/VideoCard/CourseVideoCard';
import ShimmerVideoCard from 'components/Atoms/Shimmer/VideoCard';
import Dropdown from 'components/Atoms/Dropdown';

import Separator from 'components/Atoms/Separator';
import {
  Container,
  Heading,
  Content,
  FilterContainer,
  VideosScrollContainer,
} from './styles';

interface SelectItems {
  key: string;
  value: string;
}

interface CourseSideMenuProps {
  courseDetails?: Course;
  courseSeasonOptions?: Array<SelectItems>
  firstItem?: SelectItems;
  isLoading?: boolean;
  videos?: Array<CourseSeasonMovie>;
  selectedPosition?: number;
  onSeasonChange?(item: any): void;
  onVideoChange?(position: number): void;
}

const CourseSideMenu: React.FC<CourseSideMenuProps> = (
  {
    courseDetails,
    courseSeasonOptions = [{ key: '', value: '' }],
    firstItem = { key: '', value: '' },
    isLoading = false,
    selectedPosition = 0,
    videos = [],
    onSeasonChange = () => console.log('default'),
    onVideoChange = () => console.log('default'),
  },
) => {
  const { goBack } = useHistory();
  return (
    <Container customType="">
      <Heading>
        <>
          <h3>
            {' '}
            <FiArrowLeft size={16} onClick={goBack} />
            {courseDetails?.title}
          </h3>
          {isLoading ? (
            <p>salve</p>
          ) : (
            <img src={courseDetails?.thumburl} alt="thumb" />
          )}
          <Separator customWidth={40} customColor="#000" type="horizontal" />
          {isLoading ? (
            <p>salve</p>
          ) : (
            <p>{courseDetails?.description}</p>
          )}
        </>
      </Heading>
      <Content>
        <FilterContainer>
          <>
            <p>Selecione para alterar</p>
            <Dropdown
              title="Selecionar aula"
              items={courseSeasonOptions}
              defaultValue={isLoading ? { key: '', value: '' } : firstItem}
              isLoading={isLoading}
              onChange={onSeasonChange}
            />
          </>
        </FilterContainer>
        <VideosScrollContainer className="hasVerticalScroll">
          {videos.length > 0 && !isLoading && videos.map((video) => (
            <VideoCard
              key={video.movieid}
              video={video}
              onSelect={onVideoChange}
              isWatching={video.position === selectedPosition}
              exercisePreviewActive={video.exerciseshortmessage !== ' '}
            />
          ))}
          {isLoading && (
          <>
            <ShimmerVideoCard type="small" />
            <ShimmerVideoCard type="small" />
            <ShimmerVideoCard type="small" />
            <ShimmerVideoCard type="small" />
            <ShimmerVideoCard type="small" />
          </>
          )}
        </VideosScrollContainer>
      </Content>
    </Container>
  );
};

export default CourseSideMenu;
