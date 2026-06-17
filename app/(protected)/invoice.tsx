import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import {
  ArrowRight,
  ClipboardList,
  FileText,
  Receipt,
  Search,
  Truck,
} from "lucide-react-native";

const invoice = () => {
  return (
    <ScrollView
      className="flex-1 bg-[#FAFAFA]"
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View className="px-6 pt-16">
        <Text className="text-slate-500 text-base">Documents</Text>

        <Text className="text-4xl font-black text-slate-900 mt-2">
          Manage Documents
        </Text>

        <Text className="text-slate-500 mt-3 leading-7">
          Create, organize and manage invoices, quotations and challans.
        </Text>
      </View>

      {/* QUICK CREATE */}

      <View className="px-6 mt-10">
        <Text className="text-xl font-bold text-slate-900">Quick Create</Text>

        <View className="flex-row flex-wrap justify-between mt-5">
          {/* INVOICE */}

          <TouchableOpacity className="w-[48%] bg-blue-600 rounded-[28px] p-5 mb-4">
            <View className="w-12 h-12 rounded-2xl bg-white/20 items-center justify-center">
              <Receipt size={24} color="white" />
            </View>

            <Text className="text-white text-lg font-bold mt-5">Invoice</Text>

            <Text className="text-blue-100 mt-2">Create invoice</Text>
          </TouchableOpacity>

          {/* QUOTATION */}

          <TouchableOpacity className="w-[48%] bg-slate-900 rounded-[28px] p-5 mb-4">
            <View className="w-12 h-12 rounded-2xl bg-white/10 items-center justify-center">
              <FileText size={24} color="white" />
            </View>

            <Text className="text-white text-lg font-bold mt-5">Quotation</Text>

            <Text className="text-slate-300 mt-2">New quotation</Text>
          </TouchableOpacity>

          {/* CHALLAN */}

          <TouchableOpacity className="w-[48%] bg-emerald-50 border border-emerald-100 rounded-[28px] p-5">
            <View className="w-12 h-12 rounded-2xl bg-emerald-100 items-center justify-center">
              <Truck size={24} color="#059669" />
            </View>

            <Text className="text-slate-900 text-lg font-bold mt-5">
              Challan
            </Text>

            <Text className="text-slate-500 mt-2">Delivery note</Text>
          </TouchableOpacity>

          {/* PURCHASE ORDER */}

          <TouchableOpacity className="w-[48%] bg-orange-50 border border-orange-100 rounded-[28px] p-5">
            <View className="w-12 h-12 rounded-2xl bg-orange-100 items-center justify-center">
              <ClipboardList size={24} color="#EA580C" />
            </View>

            <Text className="text-slate-900 text-lg font-bold mt-5">PO</Text>

            <Text className="text-slate-500 mt-2">Purchase order</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* SEARCH */}

      <View className="px-6 mt-8">
        <TouchableOpacity className="bg-white border border-slate-200 rounded-2xl p-4 flex-row items-center">
          <Search size={20} color="#64748b" />

          <Text className="ml-3 text-slate-500">Search documents...</Text>
        </TouchableOpacity>
      </View>

      {/* RECENT */}

      <View className="px-6 mt-10">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-bold text-slate-900">
            Recent Documents
          </Text>

          <Text className="text-blue-600 font-semibold">View All</Text>
        </View>

        {/* DOCUMENT */}

        <TouchableOpacity className="bg-white rounded-3xl p-5 border border-slate-100 mt-5">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-slate-900 font-bold text-lg">INV-1025</Text>

              <Text className="text-slate-500 mt-1">ABC Technologies</Text>
            </View>

            <ArrowRight size={18} color="#64748b" />
          </View>

          <View className="flex-row justify-between mt-5">
            <Text className="text-slate-500">Invoice</Text>

            <Text className="font-semibold text-slate-900">₹58,000</Text>
          </View>
        </TouchableOpacity>

        {/* DOCUMENT */}

        <TouchableOpacity className="bg-white rounded-3xl p-5 border border-slate-100 mt-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-slate-900 font-bold text-lg">QT-202</Text>

              <Text className="text-slate-500 mt-1">Pixel Studio</Text>
            </View>

            <ArrowRight size={18} color="#64748b" />
          </View>

          <View className="flex-row justify-between mt-5">
            <Text className="text-slate-500">Quotation</Text>

            <Text className="font-semibold text-slate-900">₹24,500</Text>
          </View>
        </TouchableOpacity>

        {/* DOCUMENT */}

        <TouchableOpacity className="bg-white rounded-3xl p-5 border border-slate-100 mt-4 mb-10">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-slate-900 font-bold text-lg">DC-056</Text>

              <Text className="text-slate-500 mt-1">XYZ Enterprise</Text>
            </View>

            <ArrowRight size={18} color="#64748b" />
          </View>

          <View className="flex-row justify-between mt-5">
            <Text className="text-slate-500">Delivery Challan</Text>

            <Text className="font-semibold text-emerald-600">Delivered</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default invoice;
