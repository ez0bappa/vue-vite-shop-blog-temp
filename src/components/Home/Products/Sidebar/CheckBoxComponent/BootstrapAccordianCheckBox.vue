<template>
  <div class="BootstrapAccordianCheckBox">
    <h4>BootstrapAccordianCheckBox</h4>
    <div class="container mt-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-7">
          <div class="panel-group checkbox_collapse" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse1"
                  >
                    <span class="circle"></span> CUSTOMER
                  </a>
                </h4>
              </div>
              <div id="collapse1" class="panel-collapse collapse in">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse2"
                  >
                    <span class="circle"></span> VENDOR</a
                  >
                </h4>
              </div>
              <div id="collapse2" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse3"
                  >
                    <span class="circle"></span>FORM
                  </a>
                </h4>
              </div>
              <div id="collapse3" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse4"
                  >
                    <span class="circle"></span>MY COMPANY
                  </a>
                </h4>
              </div>
              <div id="collapse4" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse5"
                  >
                    <span class="circle"></span> MY WALLET
                  </a>
                </h4>
              </div>
              <div id="collapse5" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse6"
                  >
                    <span class="circle"></span> MY BANK DETAILS
                  </a>
                </h4>
              </div>
              <div id="collapse6" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapse7"
                  >
                    <span class="circle"></span> OTHERS
                  </a>
                </h4>
              </div>
              <div id="collapse7" class="panel-collapse collapse">
                <div class="panel-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BootstrapAccordianCheckBox",
};
</script>

<style scoped>
.checkbox_collapse .panel.panel-default {
    padding: 0px !important;
    margin-bottom: 2px;
    border-radius: 0px
}

.checkbox_collapse .panel.panel-default span.circle {
    width: 18px;
    height: 18px;
    position: relative;
    border: 1px solid #ccc;
    margin-right: 10px;
    border-radius: 2px;
    background-color: #fff;
    display: inline-flex;
    vertical-align: middle
}

.checkbox_collapse .panel.panel-default span.circle:after {
    width: 25px;
    content: "";
    background: url(https://image.flaticon.com/icons/svg/64/64484.svg);
    position: absolute;
    left: 3px;
    right: 0;
    margin: 0 auto;
    top: 4px;
    z-index: 99999;
    background-size: 10px;
    height: 25px;
    opacity: 0;
    background-repeat: no-repeat
}

.checkbox_collapse .panel.panel-default a {
    padding: 15px;
    background-color: #009688;
    color: #fff;
    font-weight: normal;
    text-decoration: none;
    font-size: 14px;
    text-transform: capitalize;
    display: block;
    border-radius: 5px
}

.checkbox_collapse .panel.panel-default a[aria-expanded="false"]:after {
    display: none !important
}

.checkbox_collapse .panel.panel-default a[aria-expanded="false"] span:after {
    opacity: 0
}

.checkbox_collapse .panel.panel-default a[aria-expanded="true"]:after {
    display: none !important
}

.checkbox_collapse .panel.panel-default a[aria-expanded="true"] span:after {
    opacity: 1
}
</style>
