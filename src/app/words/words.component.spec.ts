import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsComponent } from './words.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('WordsComponent', () => {
  let component: WordsComponent;
  let fixture: ComponentFixture<WordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ WordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should bind input to property', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const i = fixture.debugElement.query(By.css('input[name="n"]')).nativeElement;
    i.value = 3;
    i.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.n).toEqual(3);
  });
});
