<?php
/**
 * CoController.php
 *
 * Cocontroller always works with the PH base 
 *
 * @author: Tibor Katelbach <tibor@pixelhumain.com>
 * Date: 14/03/2014
 */
class CoController extends CommunecterController {


    protected function beforeAction($action) {
        //parent::initPage();
		return parent::beforeAction($action);
  	}

  	public function actions()
	{
	    return array(
	        'test'  => 'places.controllers.actions.TestAction',
	        'search'  => 'places.controllers.actions.SearchAction'
	    );
	}

	public function actionIndex() 
	{
    	if(Yii::app()->request->isAjaxRequest)
	        echo $this->renderPartial("../default/index");
	    else
    		$this->render("../default/index");
    	//$this->redirect(Yii::app()->createUrl( "/".Yii::app()->params["module"]["parent"] ));	
  	}
}
