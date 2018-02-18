/* eslint max-len: 0 */

module.exports = platform => [{
  name: ({ name }) => `${platform}/${name}.podspec`,
  content: ({ name }) => `
Pod::Spec.new do |s|
  s.name         = "${name}"
  s.version      = "1.0.0"
  s.summary      = "${name}"
  s.description  = <<-DESC
                  ${name}
                   DESC
  s.homepage     = ""
  s.license      = "MIT"
  # s.license      = { :type => "MIT", :file => "FILE_LICENSE" }
  s.author             = { "author" => "author@domain.cn" }
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/author/${name}.git", :tag => "master" }
  s.source_files  = "${name}/**/*.{h,m}"
  s.requires_arc = true


  s.dependency "React"
  #s.dependency "others"

end

  `,
}, {

  name: ({ name }) => `${platform}/${name}.h`,
  content: ({ name }) => `
#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface ${name} : NSObject <RCTBridgeModule>

@end
  `,
}, {
  name: ({ name }) => `${platform}/${name}.m`,
  content: ({ name }) => `
#import "${name}.h"

@implementation ${name}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()

@end
  `,
}, {
  name: ({ name }) => `${platform}/${name}.xcworkspace/contents.xcworkspacedata`,
  content: ({ name }) => `<?xml version="1.0" encoding="UTF-8"?>
<Workspace
   version = "1.0">
   <FileRef
      location = "group:${name}.xcodeproj">
   </FileRef>
</Workspace>
  `,
}, {
  name: ({ name }) => `${platform}/${name}.xcodeproj/project.pbxproj`,
  content: ({ name }) => `// !$*UTF8*$!
{
	archiveVersion = 1;
	classes = {
	};
	objectVersion = 46;
	objects = {

/* Begin PBXBuildFile section */
		289A75F91F7D1C4500E34F27 /* libReact.a in Frameworks */ = {isa = PBXBuildFile; fileRef = 289A75E91F7D1BF800E34F27 /* libReact.a */; };
		B3E7B58A1CC2AC0600A0062D /* ${name}.m in Sources */ = {isa = PBXBuildFile; fileRef = B3E7B5891CC2AC0600A0062D /* ${name}.m */; };
/* End PBXBuildFile section */

/* Begin PBXContainerItemProxy section */
		289A75E81F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 83CBBA2E1A601D0E00E9B192;
			remoteInfo = React;
		};
		289A75EA1F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 2D2A28131D9B038B00D4039D;
			remoteInfo = "React-tvOS";
		};
		289A75EC1F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 3D3C059A1DE3340900C268FA;
			remoteInfo = yoga;
		};
		289A75EE1F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 3D3C06751DE3340C00C268FA;
			remoteInfo = "yoga-tvOS";
		};
		289A75F01F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 3D3CD9251DE5FBEC00167DC4;
			remoteInfo = cxxreact;
		};
		289A75F21F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 3D3CD9321DE5FBEE00167DC4;
			remoteInfo = "cxxreact-tvOS";
		};
		289A75F41F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 3D3CD90B1DE5FBD600167DC4;
			remoteInfo = jschelpers;
		};
		289A75F61F7D1BF800E34F27 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
			proxyType = 2;
			remoteGlobalIDString = 3D3CD9181DE5FBD800167DC4;
			remoteInfo = "jschelpers-tvOS";
		};
/* End PBXContainerItemProxy section */

/* Begin PBXCopyFilesBuildPhase section */
		58B511D91A9E6C8500147676 /* CopyFiles */ = {
			isa = PBXCopyFilesBuildPhase;
			buildActionMask = 2147483647;
			dstPath = "include/$(PRODUCT_NAME)";
			dstSubfolderSpec = 16;
			files = (
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXCopyFilesBuildPhase section */

/* Begin PBXFileReference section */
		134814201AA4EA6300B7C361 /* lib${name}.a */ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = lib${name}.a; sourceTree = BUILT_PRODUCTS_DIR; };
		289A75DD1F7D1BF800E34F27 /* React.xcodeproj */ = {isa = PBXFileReference; lastKnownFileType = "wrapper.pb-project"; name = React.xcodeproj; path = "../node_modules/react-native/React/React.xcodeproj"; sourceTree = "<group>"; };
		B3E7B5881CC2AC0600A0062D /* ${name}.h */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = sourcecode.c.h; path = ${name}.h; sourceTree = "<group>"; };
		B3E7B5891CC2AC0600A0062D /* ${name}.m */ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = sourcecode.c.objc; path = ${name}.m; sourceTree = "<group>"; };
/* End PBXFileReference section */

/* Begin PBXFrameworksBuildPhase section */
		58B511D81A9E6C8500147676 /* Frameworks */ = {
			isa = PBXFrameworksBuildPhase;
			buildActionMask = 2147483647;
			files = (
				289A75F91F7D1C4500E34F27 /* libReact.a in Frameworks */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXFrameworksBuildPhase section */

/* Begin PBXGroup section */
		134814211AA4EA7D00B7C361 /* Products */ = {
			isa = PBXGroup;
			children = (
				134814201AA4EA6300B7C361 /* lib${name}.a */,
			);
			name = Products;
			sourceTree = "<group>";
		};
		289A75DE1F7D1BF800E34F27 /* Products */ = {
			isa = PBXGroup;
			children = (
				289A75E91F7D1BF800E34F27 /* libReact.a */,
				289A75EB1F7D1BF800E34F27 /* libReact.a */,
				289A75ED1F7D1BF800E34F27 /* libyoga.a */,
				289A75EF1F7D1BF800E34F27 /* libyoga.a */,
				289A75F11F7D1BF800E34F27 /* libcxxreact.a */,
				289A75F31F7D1BF800E34F27 /* libcxxreact.a */,
				289A75F51F7D1BF800E34F27 /* libjschelpers.a */,
				289A75F71F7D1BF800E34F27 /* libjschelpers.a */,
			);
			name = Products;
			sourceTree = "<group>";
		};
		289A75F81F7D1C4500E34F27 /* Frameworks */ = {
			isa = PBXGroup;
			children = (
			);
			name = Frameworks;
			sourceTree = "<group>";
		};
		58B511D21A9E6C8500147676 = {
			isa = PBXGroup;
			children = (
				B3E7B5881CC2AC0600A0062D /* ${name}.h */,
				B3E7B5891CC2AC0600A0062D /* ${name}.m */,
				134814211AA4EA7D00B7C361 /* Products */,
				289A75DD1F7D1BF800E34F27 /* React.xcodeproj */,
				289A75F81F7D1C4500E34F27 /* Frameworks */,
			);
			sourceTree = "<group>";
		};
/* End PBXGroup section */

/* Begin PBXNativeTarget section */
		58B511DA1A9E6C8500147676 /* ${name} */ = {
			isa = PBXNativeTarget;
			buildConfigurationList = 58B511EF1A9E6C8500147676 /* Build configuration list for PBXNativeTarget "${name}" */;
			buildPhases = (
				58B511D71A9E6C8500147676 /* Sources */,
				58B511D81A9E6C8500147676 /* Frameworks */,
				58B511D91A9E6C8500147676 /* CopyFiles */,
			);
			buildRules = (
			);
			dependencies = (
			);
			name = ${name};
			productName = RCTDataManager;
			productReference = 134814201AA4EA6300B7C361 /* lib${name}.a */;
			productType = "com.apple.product-type.library.static";
		};
/* End PBXNativeTarget section */

/* Begin PBXProject section */
		58B511D31A9E6C8500147676 /* Project object */ = {
			isa = PBXProject;
			attributes = {
				LastUpgradeCheck = 0830;
				ORGANIZATIONNAME = Facebook;
				TargetAttributes = {
					58B511DA1A9E6C8500147676 = {
						CreatedOnToolsVersion = 6.1.1;
					};
				};
			};
			buildConfigurationList = 58B511D61A9E6C8500147676 /* Build configuration list for PBXProject "${name}" */;
			compatibilityVersion = "Xcode 3.2";
			developmentRegion = English;
			hasScannedForEncodings = 0;
			knownRegions = (
				en,
			);
			mainGroup = 58B511D21A9E6C8500147676;
			productRefGroup = 58B511D21A9E6C8500147676;
			projectDirPath = "";
			projectReferences = (
				{
					ProductGroup = 289A75DE1F7D1BF800E34F27 /* Products */;
					ProjectRef = 289A75DD1F7D1BF800E34F27 /* React.xcodeproj */;
				},
			);
			projectRoot = "";
			targets = (
				58B511DA1A9E6C8500147676 /* ${name} */,
			);
		};
/* End PBXProject section */

/* Begin PBXReferenceProxy section */
		289A75E91F7D1BF800E34F27 /* libReact.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libReact.a;
			remoteRef = 289A75E81F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
		289A75EB1F7D1BF800E34F27 /* libReact.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libReact.a;
			remoteRef = 289A75EA1F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
		289A75ED1F7D1BF800E34F27 /* libyoga.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libyoga.a;
			remoteRef = 289A75EC1F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
		289A75EF1F7D1BF800E34F27 /* libyoga.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libyoga.a;
			remoteRef = 289A75EE1F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
		289A75F11F7D1BF800E34F27 /* libcxxreact.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libcxxreact.a;
			remoteRef = 289A75F01F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
		289A75F31F7D1BF800E34F27 /* libcxxreact.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libcxxreact.a;
			remoteRef = 289A75F21F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
		289A75F51F7D1BF800E34F27 /* libjschelpers.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libjschelpers.a;
			remoteRef = 289A75F41F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
		289A75F71F7D1BF800E34F27 /* libjschelpers.a */ = {
			isa = PBXReferenceProxy;
			fileType = archive.ar;
			path = libjschelpers.a;
			remoteRef = 289A75F61F7D1BF800E34F27 /* PBXContainerItemProxy */;
			sourceTree = BUILT_PRODUCTS_DIR;
		};
/* End PBXReferenceProxy section */

/* Begin PBXSourcesBuildPhase section */
		58B511D71A9E6C8500147676 /* Sources */ = {
			isa = PBXSourcesBuildPhase;
			buildActionMask = 2147483647;
			files = (
				B3E7B58A1CC2AC0600A0062D /* ${name}.m in Sources */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXSourcesBuildPhase section */

/* Begin XCBuildConfiguration section */
		58B511ED1A9E6C8500147676 /* Debug */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				CLANG_CXX_LANGUAGE_STANDARD = "gnu++0x";
				CLANG_CXX_LIBRARY = "libc++";
				CLANG_ENABLE_MODULES = YES;
				CLANG_ENABLE_OBJC_ARC = YES;
				CLANG_WARN_BOOL_CONVERSION = YES;
				CLANG_WARN_CONSTANT_CONVERSION = YES;
				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
				CLANG_WARN_EMPTY_BODY = YES;
				CLANG_WARN_ENUM_CONVERSION = YES;
				CLANG_WARN_INFINITE_RECURSION = YES;
				CLANG_WARN_INT_CONVERSION = YES;
				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
				CLANG_WARN_SUSPICIOUS_MOVE = YES;
				CLANG_WARN_UNREACHABLE_CODE = YES;
				CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
				COPY_PHASE_STRIP = NO;
				ENABLE_STRICT_OBJC_MSGSEND = YES;
				ENABLE_TESTABILITY = YES;
				GCC_C_LANGUAGE_STANDARD = gnu99;
				GCC_DYNAMIC_NO_PIC = NO;
				GCC_NO_COMMON_BLOCKS = YES;
				GCC_OPTIMIZATION_LEVEL = 0;
				GCC_PREPROCESSOR_DEFINITIONS = (
					"DEBUG=1",
					"$(inherited)",
				);
				GCC_SYMBOLS_PRIVATE_EXTERN = NO;
				GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
				GCC_WARN_UNDECLARED_SELECTOR = YES;
				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
				GCC_WARN_UNUSED_FUNCTION = YES;
				GCC_WARN_UNUSED_VARIABLE = YES;
				IPHONEOS_DEPLOYMENT_TARGET = 8.0;
				MTL_ENABLE_DEBUG_INFO = YES;
				ONLY_ACTIVE_ARCH = YES;
				SDKROOT = iphoneos;
			};
			name = Debug;
		};
		58B511EE1A9E6C8500147676 /* Release */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				CLANG_CXX_LANGUAGE_STANDARD = "gnu++0x";
				CLANG_CXX_LIBRARY = "libc++";
				CLANG_ENABLE_MODULES = YES;
				CLANG_ENABLE_OBJC_ARC = YES;
				CLANG_WARN_BOOL_CONVERSION = YES;
				CLANG_WARN_CONSTANT_CONVERSION = YES;
				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
				CLANG_WARN_EMPTY_BODY = YES;
				CLANG_WARN_ENUM_CONVERSION = YES;
				CLANG_WARN_INFINITE_RECURSION = YES;
				CLANG_WARN_INT_CONVERSION = YES;
				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
				CLANG_WARN_SUSPICIOUS_MOVE = YES;
				CLANG_WARN_UNREACHABLE_CODE = YES;
				CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
				COPY_PHASE_STRIP = YES;
				ENABLE_NS_ASSERTIONS = NO;
				ENABLE_STRICT_OBJC_MSGSEND = YES;
				GCC_C_LANGUAGE_STANDARD = gnu99;
				GCC_NO_COMMON_BLOCKS = YES;
				GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
				GCC_WARN_UNDECLARED_SELECTOR = YES;
				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
				GCC_WARN_UNUSED_FUNCTION = YES;
				GCC_WARN_UNUSED_VARIABLE = YES;
				IPHONEOS_DEPLOYMENT_TARGET = 8.0;
				MTL_ENABLE_DEBUG_INFO = NO;
				SDKROOT = iphoneos;
				VALIDATE_PRODUCT = YES;
			};
			name = Release;
		};
		58B511F01A9E6C8500147676 /* Debug */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				HEADER_SEARCH_PATHS = (
					"$(inherited)",
					/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,
					"$(SRCROOT)/../../../React/**",
					"$(SRCROOT)/../../react-native/React/**",
				);
				LIBRARY_SEARCH_PATHS = "$(inherited)";
				OTHER_LDFLAGS = "-ObjC";
				PRODUCT_NAME = ${name};
				SKIP_INSTALL = YES;
			};
			name = Debug;
		};
		58B511F11A9E6C8500147676 /* Release */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				HEADER_SEARCH_PATHS = (
					"$(inherited)",
					/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/include,
					"$(SRCROOT)/../../../React/**",
					"$(SRCROOT)/../../react-native/React/**",
				);
				LIBRARY_SEARCH_PATHS = "$(inherited)";
				OTHER_LDFLAGS = "-ObjC";
				PRODUCT_NAME = ${name};
				SKIP_INSTALL = YES;
			};
			name = Release;
		};
/* End XCBuildConfiguration section */

/* Begin XCConfigurationList section */
		58B511D61A9E6C8500147676 /* Build configuration list for PBXProject "${name}" */ = {
			isa = XCConfigurationList;
			buildConfigurations = (
				58B511ED1A9E6C8500147676 /* Debug */,
				58B511EE1A9E6C8500147676 /* Release */,
			);
			defaultConfigurationIsVisible = 0;
			defaultConfigurationName = Release;
		};
		58B511EF1A9E6C8500147676 /* Build configuration list for PBXNativeTarget "${name}" */ = {
			isa = XCConfigurationList;
			buildConfigurations = (
				58B511F01A9E6C8500147676 /* Debug */,
				58B511F11A9E6C8500147676 /* Release */,
			);
			defaultConfigurationIsVisible = 0;
			defaultConfigurationName = Release;
		};
/* End XCConfigurationList section */
	};
	rootObject = 58B511D31A9E6C8500147676 /* Project object */;
}
`,
}];
