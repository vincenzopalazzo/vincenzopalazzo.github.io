import 'package:angular/angular.dart';
import 'package:vincenzopalazzo/src/components/navigator/navigator_component.dart';

@Component(
  selector: 'my-app',

  template: '''
    <vp-menu></vp-menu>
    <h1 class="presentation"> Hello this is home page the my personal site </h1>
    <h3 class="sub_presentation">This site is write with {{language}}</h3> 
    ''',
  directives: [NavigatorBar]
)
class AppComponent {
  var language = 'AngularDart';
}
