module.exports = platform => [{
  name: () => `${platform}/build.gradle`,
  content: () => `
buildscript {
    repositories {
        jcenter()
    }

    dependencies {
        // Matches the RN Hello World template
        // https://github.com/facebook/react-native/blob/1e8f3b11027fe0a7514b4fc97d0798d3c64bc895/local-cli/templates/HelloWorld/android/build.gradle#L8
        classpath 'com.android.tools.build:gradle:2.2.3'
    }
}

apply plugin: 'com.android.library'

android {
    compileSdkVersion 23
    buildToolsVersion "23.0.1"

    defaultConfig {
        minSdkVersion 16
        targetSdkVersion 22
        versionCode 1
        versionName "1.0"
    }
    lintOptions {
        abortOnError false
    }
}

repositories {
    maven {
        // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
        // Matches the RN Hello World template
        // https://github.com/facebook/react-native/blob/1e8f3b11027fe0a7514b4fc97d0798d3c64bc895/local-cli/templates/HelloWorld/android/build.gradle#L21
        url "$projectDir/../node_modules/react-native/android"
    }
    mavenCentral()
}

dependencies {
    compile 'com.facebook.react:react-native:+'
}
  `,
}, {
  name: () => `${platform}/src/main/AndroidManifest.xml`,
  content: ({ packageIdentifier }) => `
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="${packageIdentifier}">

</manifest>
  `,
}, {
  name: ({ packageIdentifier, name }) =>
    `${platform}/src/main/java/${packageIdentifier.split('.').join('/')}/${name}Module.java`,
  content: ({ packageIdentifier, name }) => `
package ${packageIdentifier};

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class ${name}Module extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public ${name}Module(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "${name}";
  }
}`,
}, {
  name: ({ packageIdentifier, name }) =>
    `${platform}/src/main/java/${packageIdentifier.split('.').join('/')}/${name}Package.java`,
  content: ({ packageIdentifier, name }) => `
package ${packageIdentifier};

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.JavaScriptModule;
public class ${name}Package implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
      return Arrays.<NativeModule>asList(new ${name}Module(reactContext));
    }

    // Deprecated from RN 0.47
    public List<Class<? extends JavaScriptModule>> createJSModules() {
      return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
      return Collections.emptyList();
    }
}`,
}];
