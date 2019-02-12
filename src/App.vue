<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <router-link to="/">
                  <Icon type="ios-navigate"></Icon>
                  Home
                </router-link>
              </MenuItem>
              <MenuItem name="2">
                <router-link to="/about">
                  <Icon type="ios-keypad"></Icon>
                  Item 1
                </router-link>
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>
                Item 2
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>
                Item 3
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Content :style="{padding: '0 50px'}">
          <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
          </Breadcrumb>
          <Card>
            <div class="contents">
              <router-view />
            </div>
          </Card>
        </Content>
        <Footer class="layout-footer-center">&copy; 2019 chundro, Inc.</Footer>
      </Layout>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
  a {
    color:inherit;
  }
}
.layout-footer-center{
  text-align: center;
}
.contents {
  min-height:200px;
}
</style>
