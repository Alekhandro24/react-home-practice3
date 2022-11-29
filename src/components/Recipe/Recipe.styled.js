import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px; 
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px -0px;,rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
  border: 3px solid grey;
  border-radius: 4px;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
// export const InfoBlock = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 16px;

//   svg {
//     color: red;
//   }
// `;

export const BadgeList = styled.div`
  display: flex;
  gap: 12px;
`;

export const Badge = styled.span`
  padding: 8px;
  border-radius: 8px;
  background-color: ${props => {
    return props.isActive ? 'orangered' : 'lightgray';
  }};
  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }};
`;

// export const Badge = styled.span`
// //   padding: 8px;
// //   border-radius: 8px;
// //   background-color: ${p => {
//     switch (p.difficulty) {
//       case 'easy':
//         return 'green';
//       case 'medium':
//         return 'yellow';
//       case 'hard':
//         return 'red';
//       default:
//         throw new Error(
//           `Unexpected value for prop difficulty - ${p.difficulty}`
//         );
//     }
//   }};
//   color: ${p => {
//     return p.isActive ? 'white' : 'black';
//   }};
// `;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  margin-bottom: 12px;
`;
