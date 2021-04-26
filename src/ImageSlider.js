// your ImageSlider code here!
import React, { Component } from 'react'

export default class ImageSlider extends Component {
    constructor(blurb) {
        super(blurb)
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return `I am on slide ${this.state.currentSlideIndex}`

    }
} 