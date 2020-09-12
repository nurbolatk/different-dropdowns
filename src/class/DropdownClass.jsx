import React, { Component } from 'react'

export class DropdownClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleEscape = this.handleEscape.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleLinkClick = this.handleLinkClick.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  toggleMenu() {
    this.setState(state => ({
      open: !state.open,
    }))
  }

  handleEscape(e) {
    if (e.keyCode === 27) {
      this.closeMenu()
    }
  }

  closeMenu() {
    this.setState({
      open: false,
    })
  }

  handleClickOutside(e) {
    const isOutside = !e.target.closest?.('.dropdown')
    if (isOutside) {
      this.closeMenu()
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleEscape)
    document.addEventListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleEscape)
    document.removeEventListener('click', this.handleClickOutside)
  }

  handleLinkClick(e) {
    const { index } = e.currentTarget.dataset
    this.props.onLinkClick(index)
    this.closeMenu()
  }

  render() {
    const { links, toggleIcon, toggleLabel } = this.props

    return (
      <div className="dropdown">
        <button onClick={this.toggleMenu}>
          {toggleIcon && <span>{toggleIcon}</span>}
          {toggleLabel}
        </button>
        <ul>
          {this.state.open &&
            links.map((link, ind) => (
              <li key={ind} data-index={ind} onClick={this.handleLinkClick}>
                {link.icon} {link.label}
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default DropdownClass
