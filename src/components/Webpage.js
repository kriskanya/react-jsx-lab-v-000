import React from 'react';
<<<<<<< HEAD
import FillerText from './FillerText';

export default class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
=======
import ReactDOM from 'react-dom';
import { FillerText } from './components/FillerText';

export class Webpage extends React.Component {
  render() {
    return (
      <title>{"The world's coolest webpage"}</title>
      <FillerText>
      <FillerText>
>>>>>>> ead36fe27fdb125111ed9402e39eb28a534f0b77
    )
  }
}
