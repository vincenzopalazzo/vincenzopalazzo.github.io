import 'package:angular/angular.dart';


@Component(
  selector: 'alter-work',
  templateUrl: 'alter_work.html',
  styleUrls: ['alter_work.css'],
)

class AlterWork implements OnInit {

  var stringTime;
  var description = "This site is in construction with AngularDart";
  String getString(){
    print("Load component");
    return "1/05/2019"; //TODO rendere dinamico questo
  }

  void ngOnInit() => stringTime = getString();
}
