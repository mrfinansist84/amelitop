import * as React from 'react'

interface IProps {
  name: string
}

export default class Banner extends React.Component<IProps> {
  render (): React.ReactNode {
    return (
      <div className="banner">
        <span className="banner__text">Hello {this.props.name}!</span>
      </div>
    )
  }
};
