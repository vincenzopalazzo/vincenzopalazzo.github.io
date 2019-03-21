import 'package:angular/angular.dart';

@Component(
  selector: 'core',

  template: '''
    <h1 class="presentation"> Hello this is home page the my personal site </h1>
    <h3 class="sub_presentation">This site is write with {{language}}</h3> 
    ''',
)
class AppComponent {
  var language = 'AngularDart';
}
