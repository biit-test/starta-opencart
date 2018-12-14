<?php
class ControllerExtensionModuleCarousel extends Controller {
	public function index($setting) {
		static $module = 0;

		$this->load->model('design/banner');
		$this->load->model('tool/image');

		$this->document->addStyle('catalog/view/javascript/jquery/owl-carousel/owl.carousel.css');
		$this->document->addScript('catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js');

		$data['banners'] = array();

		$results = $this->model_design_banner->getBanner($setting['banner_id']);

		foreach ($results as $result) {
			if (is_file(DIR_IMAGE . $result['image'])) {
				// $sizeWidth  = $setting['width'] == 0 || $setting['width'] == '' ? '100%' : $setting['width'];
				// $sizeHeight  = $setting['height'] == 0 || $setting['height'] == '' ? '100%' : $setting['height'];
				$data['banners'][] = array(
					'title' => $result['title'],
					'link'  => $result['link'],
					'image' => $this->DIR_IMAGE .'image/'. $result['image']
					// 'image' => $this->model_tool_image->resize($result['image'], $sizeWidth, $sizeHeight);
				);
			}
		}

		$data['module'] = $results;

		return $this->load->view('extension/module/carousel', $data);
	}
}