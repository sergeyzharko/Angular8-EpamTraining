import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false})
  
  title: ElementRef<HTMLInputElement>;
  display = true;

  ngAfterViewInit() {
    this.title.nativeElement.textContent = 'Shop';
  }

  toggle(): void {
    this.display = !this.display;
  }
}
