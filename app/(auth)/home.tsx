import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  ArrowRight,
  BarChart3,
  FileText,
  Globe,
  ShieldCheck,
  Zap,
} from "lucide-react-native";

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        {/* HERO */}
        <View className="px-6 pt-20 pb-14">
          {/* TOP BADGE */}
          <View className="self-start bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
            <Text className="text-blue-700 font-semibold text-xs tracking-wide">
              ENTERPRISE BUSINESS PLATFORM
            </Text>
          </View>

          {/* HEADING */}
          <Text className="text-[42px] leading-[50px] font-black text-slate-900 mt-8">
            Create Beautiful <Text className="text-blue-600">Quotations</Text> &
            Invoices In Minutes.
          </Text>

          {/* DESCRIPTION */}
          <Text className="text-slate-600 text-[16px] leading-8 mt-6">
            Powerful business automation platform for agencies, wholesalers,
            freelancers and modern teams.
          </Text>

          {/* BUTTONS */}
          <View className="flex-row mt-10 gap-4">
            <TouchableOpacity
              activeOpacity={0.9}
              className="bg-slate-900 px-6 py-4 rounded-2xl flex-row items-center shadow-lg shadow-slate-300"
            >
              <Text className="text-white font-bold text-[15px]">
                Start Free
              </Text>

              <ArrowRight size={18} color="white" style={{ marginLeft: 8 }} />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              className="bg-white border border-slate-200 px-6 py-4 rounded-2xl"
            >
              <Text className="text-slate-700 font-semibold text-[15px]">
                Watch Demo
              </Text>
            </TouchableOpacity>
          </View>

          {/* STATS */}
          <View className="flex-row justify-between mt-14">
            <View>
              <Text className="text-3xl font-black text-slate-900">50K+</Text>

              <Text className="text-slate-500 mt-2">Documents</Text>
            </View>

            <View>
              <Text className="text-3xl font-black text-slate-900">1200+</Text>

              <Text className="text-slate-500 mt-2">Businesses</Text>
            </View>

            <View>
              <Text className="text-3xl font-black text-slate-900">99.9%</Text>

              <Text className="text-slate-500 mt-2">Uptime</Text>
            </View>
          </View>
        </View>

        {/* DASHBOARD PREVIEW */}
        <View className="px-6">
          <View
            className="bg-white rounded-[32px] p-6 border border-slate-100"
            style={{
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 20,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              elevation: 4,
            }}
          >
            {/* HEADER */}
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-slate-900 font-bold text-xl">
                  Dashboard
                </Text>

                <Text className="text-slate-500 mt-1">Business Overview</Text>
              </View>

              <TouchableOpacity className="bg-blue-600 px-4 py-3 rounded-2xl">
                <Text className="text-white font-semibold">New Invoice</Text>
              </TouchableOpacity>
            </View>

            {/* CARDS */}
            <View className="flex-row mt-7 justify-between">
              <View className="bg-slate-50 rounded-3xl p-5 w-[31%]">
                <Text className="text-slate-500 text-xs">Revenue</Text>

                <Text className="text-slate-900 text-xl font-black mt-3">
                  ₹4.8L
                </Text>
              </View>

              <View className="bg-slate-50 rounded-3xl p-5 w-[31%]">
                <Text className="text-slate-500 text-xs">Invoices</Text>

                <Text className="text-slate-900 text-xl font-black mt-3">
                  1,284
                </Text>
              </View>

              <View className="bg-slate-50 rounded-3xl p-5 w-[31%]">
                <Text className="text-slate-500 text-xs">Pending</Text>

                <Text className="text-slate-900 text-xl font-black mt-3">
                  32
                </Text>
              </View>
            </View>

            {/* RECENT */}
            <View className="mt-8">
              <Text className="text-slate-900 font-bold text-lg">
                Recent Quotations
              </Text>

              {/* ITEM */}
              <View className="bg-slate-50 rounded-3xl p-5 mt-5">
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-slate-900 font-semibold">
                      Website Development
                    </Text>

                    <Text className="text-slate-500 mt-1">
                      ABC Technologies
                    </Text>
                  </View>

                  <View className="items-end">
                    <Text className="text-slate-900 font-black text-lg">
                      ₹58,000
                    </Text>

                    <Text className="text-green-600 mt-1 font-medium">
                      Approved
                    </Text>
                  </View>
                </View>
              </View>

              {/* ITEM */}
              <View className="bg-slate-50 rounded-3xl p-5 mt-4">
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-slate-900 font-semibold">
                      Mobile App UI Design
                    </Text>

                    <Text className="text-slate-500 mt-1">Pixel Studio</Text>
                  </View>

                  <View className="items-end">
                    <Text className="text-slate-900 font-black text-lg">
                      ₹24,500
                    </Text>

                    <Text className="text-yellow-600 mt-1 font-medium">
                      Pending
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* FEATURES */}
        <View className="px-6 mt-20">
          <Text className="text-blue-600 font-bold tracking-[3px] text-xs">
            FEATURES
          </Text>

          <Text className="text-4xl leading-[48px] font-black text-slate-900 mt-5">
            Everything Your Business Needs.
          </Text>

          {/* GRID */}
          <View className="mt-10 gap-5">
            {/* CARD */}
            <View className="bg-white rounded-[30px] p-6 border border-slate-100">
              <View className="w-14 h-14 rounded-2xl bg-blue-50 items-center justify-center">
                <FileText size={26} color="#2563EB" />
              </View>

              <Text className="text-slate-900 text-2xl font-bold mt-6">
                Smart Quotations
              </Text>

              <Text className="text-slate-600 leading-8 mt-4">
                Generate beautiful quotations and invoices instantly.
              </Text>
            </View>

            {/* CARD */}
            <View className="bg-white rounded-[30px] p-6 border border-slate-100">
              <View className="w-14 h-14 rounded-2xl bg-purple-50 items-center justify-center">
                <Zap size={26} color="#7C3AED" />
              </View>

              <Text className="text-slate-900 text-2xl font-bold mt-6">
                Instant PDF Export
              </Text>

              <Text className="text-slate-600 leading-8 mt-4">
                Download high-quality professional PDF documents.
              </Text>
            </View>

            {/* CARD */}
            <View className="bg-white rounded-[30px] p-6 border border-slate-100">
              <View className="w-14 h-14 rounded-2xl bg-green-50 items-center justify-center">
                <Globe size={26} color="#16A34A" />
              </View>

              <Text className="text-slate-900 text-2xl font-bold mt-6">
                Share Anywhere
              </Text>

              <Text className="text-slate-600 leading-8 mt-4">
                Share quotations instantly via WhatsApp or links.
              </Text>
            </View>

            {/* CARD */}
            <View className="bg-white rounded-[30px] p-6 border border-slate-100">
              <View className="w-14 h-14 rounded-2xl bg-yellow-50 items-center justify-center">
                <BarChart3 size={26} color="#CA8A04" />
              </View>

              <Text className="text-slate-900 text-2xl font-bold mt-6">
                Business Analytics
              </Text>

              <Text className="text-slate-600 leading-8 mt-4">
                Track revenue, approvals and pending invoices.
              </Text>
            </View>

            {/* CARD */}
            <View className="bg-white rounded-[30px] p-6 border border-slate-100 mb-20">
              <View className="w-14 h-14 rounded-2xl bg-cyan-50 items-center justify-center">
                <ShieldCheck size={26} color="#0891B2" />
              </View>

              <Text className="text-slate-900 text-2xl font-bold mt-6">
                Secure Cloud Storage
              </Text>

              <Text className="text-slate-600 leading-8 mt-4">
                Safely store your invoices and business documents.
              </Text>
            </View>
          </View>
        </View>
        {/* parent company name, from evoxnet  */}
        <Text className="text-center text-slate-600 text-sm mt-10">From </Text>
        <Text className="text-center text-slate-700 text-xl font-bold mb-10">
          evoxnet
        </Text>
      </ScrollView>
    </>
  );
}
