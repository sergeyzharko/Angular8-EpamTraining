import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from '../../../core/services/config-options.service';
import { ConstantService, versionInstance} from '../../../core/services/constant.service';
import { GeneratorService } from '../../../core/services/generator.service';
import { GeneratorFactory, RandomString } from '../../../core/services/generator.factory';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    { provide: ConstantService, useValue: versionInstance },
    { provide: RandomString, useFactory: GeneratorFactory(10), deps: [GeneratorService] }
  ]
})
export class AboutComponent implements OnInit {

  login: string;
  app: string;
  ver: string;
  randStr: string;

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private appService: ConstantService,
    @Inject(RandomString) private randomString: string
  ) { }

  ngOnInit() {
    this.configOptionsService.set(1, 'MyLogin', 'MyEmail');
    this.getData();
  }

  getData() {
    this.login = this.configOptionsService ? this.configOptionsService.get().login : 'No Service Found';
    this.app = this.appService ? this.appService.getConstant().App : 'No Service Found';
    this.ver = this.appService ? this.appService.getConstant().Ver : 'No Service Found';
    this.randStr = `RandomString: ${this.randomString}`;
  }

}
