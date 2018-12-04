// /* eslint-disable import/no-extraneous-dependencies */
// import React from 'react';
// import PropTypes from 'prop-types';
// import { storiesOf } from '@storybook/react';
// import styled from 'styled-components';
//
// import TooltipMessage from './TooltipMessage';
// import WithTooltip from './WithTooltip';
//
// const ViewPort = styled.div`
//   height: 300px;
// `;
//
// const BackgroundBox = styled.div`
//   width: 500px;
//   height: 500px;
//   overflow-y: scroll;
//   background: #eee;
//   position: relative;
// `;
//
// const Spacer = styled.div`
//   height: 100px;
// `;
//
// const Trigger = styled.div`
//   width: 200px;
//   height: 100px;
//   background-color: red;
//   color: white;
// `;
//
// const Tooltip = ({ onHide }) => (
//   <TooltipMessage
//     title="Lorem ipsum dolor sit"
//     desc="Amet consectatur vestibulum concet durum politu coret weirom"
//     links={[{ title: 'Continue', onClick: onHide }]}
//   />
// );
//
// Tooltip.propTypes = {
//   onHide: PropTypes.func,
// };
//
// Tooltip.defaultProps = {
//   onHide: null,
// };
//
// storiesOf('tooltip/WithTooltip', module)
//   .addDecorator(storyFn => (
//     <ViewPort>
//       <BackgroundBox>
//         <Spacer />
//         {storyFn()}
//       </BackgroundBox>
//     </ViewPort>
//   ))
//   .add('simple hover', () => (
//     <WithTooltip placement="top" mode="hover" tooltip={<Tooltip />}>
//       <Trigger>Hover me!</Trigger>
//     </WithTooltip>
//   ))
//   .add('simple hover, functional', () => (
//     <WithTooltip placement="top" mode="hover" tooltip={Tooltip}>
//       <Trigger>Hover me!</Trigger>
//     </WithTooltip>
//   ))
//   .add('simple click', () => (
//     <WithTooltip placement="top" mode="click" tooltip={<Tooltip />}>
//       <Trigger>Click me!</Trigger>
//     </WithTooltip>
//   ))
//   .add('simple click start open', () => (
//     <WithTooltip placement="top" mode="click" startOpen tooltip={<Tooltip />}>
//       <Trigger>Click me!</Trigger>
//     </WithTooltip>
//   ))
//   .add('simple click closeOnClick', () => (
//     <WithTooltip placement="top" mode="click" closeOnClick tooltip={<Tooltip />}>
//       <Trigger>Click me!</Trigger>
//     </WithTooltip>
//   ))
//   .add('no chrome', () => (
//     <WithTooltip placement="top" mode="click" hasChrome={false} tooltip={<Tooltip />}>
//       <Trigger>Click me!</Trigger>
//     </WithTooltip>
//   ));