import styled from 'styled-components';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../atoms';

const ThemeIcon = styled.div`
  float: right;
  &:hover {
    color: ${(props) => props.theme.accentColor};
    cursor: pointer;
  }
`;

function Toggle() {
  const [isDark, setDarkAtom] = useRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return <ThemeIcon>{isDark ? <BsMoonStars onClick={toggleDarkAtom} size="27" /> : <BsSun onClick={toggleDarkAtom} size="27" />}</ThemeIcon>;
}

export default Toggle;
