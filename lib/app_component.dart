import 'package:angular/angular.dart';
import 'package:vincenzopalazzo/src/components/navigator/navigator_component.dart';
import 'package:vincenzopalazzo/src/components/corner/corner.dart';
import 'package:vincenzopalazzo/src/components/myavatar/my_avatar.dart';
import 'package:vincenzopalazzo/src/components/alterwork/alter_work.dart';

@Component(
  selector: 'my-app',

  template: '''
    <vp-menu></vp-menu>
    <vp-corner></vp-corner>
    <my-avatar></my-avatar>
    <alter-work></alter-work>
    ''',
  directives: [NavigatorBar, Corner, MyAvatar, AlterWork]
)
class AppComponent {
  var language = 'AngularDart';
}
