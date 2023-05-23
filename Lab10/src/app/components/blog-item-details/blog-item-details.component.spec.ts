import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemDetailsComponent } from './blog-item-details.component';

describe('BlogItemDetailsComponent', () => {
  let component: BlogItemDetailsComponent;
  let fixture: ComponentFixture<BlogItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogItemDetailsComponent]
    });
    fixture = TestBed.createComponent(BlogItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
