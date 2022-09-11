import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[errorMsg]'
})

export class FieldErrorDirective implements OnInit {
    @Input() message: string = 'Este Campo es requerido*';
    @Input() color: string = '#EF4444';

    constructor(private element: ElementRef<HTMLElement>){}

    ngOnInit(): void {
        this.setMessage();
        this.setColor();
    }

    setMessage(){
        this.element.nativeElement.innerHTML = this.message;
    }

    setColor(){
        this.element.nativeElement.style.color = this.color;
    }

}