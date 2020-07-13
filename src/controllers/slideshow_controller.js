import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.index = 0
  }

  next() {
    this.index++
  }

  previous() {
    this.index--
  }

  showCurrentSlide() {
    this.slideTargets.forEach((element, i) => {
      element.classList.toggle("slide--current", this.index == i)
    })
  }

  get index() {
    return parseInt(this.data.get("index"))
  }

  set index(value) {
    if (value < 0) {
      value = 3;
    } else if (value > 3) {
      value = 0;
    }
    this.data.set("index", value)
    this.showCurrentSlide()
  }
}
