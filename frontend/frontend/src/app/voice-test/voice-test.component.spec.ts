import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceTestComponent } from './voice-test.component';

describe('VoiceTestComponent', () => {
  let component: VoiceTestComponent;
  let fixture: ComponentFixture<VoiceTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
