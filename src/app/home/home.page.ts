import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit  {

  constructor(
		private animationCtrl: AnimationController
    ) {}

	@ViewChild('warning', { read: ElementRef }) icon: ElementRef;
	anim: Animation;

	ngAfterViewInit() {
		this.anim = this.animationCtrl.create()
		.addElement(this.icon.nativeElement)
		.duration(2000)
		.iterations(Infinity)
		.keyframes([
		  { offset: 0, color: 'var(--ion-color-danger)' },
		  { offset: 0.6, color: 'var(--ion-color-primary)' },
		  { offset: 1, color: 'var(--ion-color-danger)' },
		]);
		this.anim.play();
	}

  test() {
		this.anim.play();
  }
}
